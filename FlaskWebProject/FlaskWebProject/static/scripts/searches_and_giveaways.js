function parse_and_upload_giveaway(university, email, user, date) {
    console.log("in the parse_and_upload_giveaway()");
    if (!check_submit()) {
        return;
    }
    // get variables
    var faculty_select = document.getElementById("give_away_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("give_away_courses");
    var course = course_select.options[course_select.selectedIndex].text;

    var description_input = document.getElementById("Description");
    var description = description_input.value;
    add_giveaway_to_db(university, email, user, faculty, course, description, date);
    //add_giveaway_to_db(university, email, user, faculty, course, description, left_to_right_date(date));
}

function left_to_right_date(date) {
    let splitted_date = date.split("-");
    let new_date = splitted_date[2] + "-" + splitted_date[1] + "-" + splitted_date[0];
    return new_date;
}

function load_table_on_search(university) {
    //console.log("in the load_table_on_search()");

    $("[data-toggle='popover']").popover('destroy');

    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;

    if (faculty_select.value == "") {
        $("[data-toggle='popover']").popover('show');
        document.getElementById("table_caption").innerHTML = "";
        return;
    }
    var is_empty = true;
    var courses = $('#search_courses').val();
    //var course_select = document.getElementById("search_courses");
    //var course = course_select.options[course_select.selectedIndex].text;
    //console.log("in the load_table_on_search() - course text is: " , course);
    //console.log("in the load_table_on_search() - all selected vals are: ", courses);

    var show_all_courses = false;
    if (courses == null) {
        show_all_courses = true;
    }
    else if (courses[0] == "") {
        show_all_courses = true;
    }

    // toggle table on
    var table = document.getElementById("search_table");
    var num_of_rows = table.rows.length;
    //var empty_msg = document.getElementById("table_caption");

    // if table is already fill up, remove all previous search
    if (num_of_rows > 1) {
        for (var i = num_of_rows; i > 1; i--) {
            table.deleteRow(i - 1);
        }
    }
    // if table style is none  (hidden) - change it to inline (show)
    if (table.style.display === "none") {
        table.style.display = "inline";
    }

    //if (empty_msg.style.display === "none") {
    //    empty_msg.style.display = "block";
    //}
    //// if all courses, act like non-picked
    //if (course == 'כל הקורסים') {
    //    //console.log("in the load_table_on_search() - inside if");
    //    course = '';
    //}
    //console.log("in the load_table_on_search() - after check all courses text, course is: ", course);

    //var found_in_DB = find_giveaways_by_search(university, faculty, course);

    document.getElementById("table_header").style.display = "none";

    //console.log("new header is: ", document.getElementById("table_caption").innerHTML);
   // console.log("empty msg is: ", empty_msg.innerHTML);
    // if "all courses" is chosen
    document.getElementById("table_caption").innerHTML = "אין חומרים למסירה בקורס שבחרת";
    if (show_all_courses) {
        //console.log("in the load_table_on_search() - inside empty if, then show all courses");
        var found_in_DB = find_giveaways_by_search(university, faculty, "");
        found_in_DB.once('value').then(function (coursekey) {
            coursekey.forEach(function (course) {
                course.forEach(function (data) {
                    //reaching this point means table isn't empty. hide empy_msg & show header
                    //empty_msg.style.display = "none";
                    document.getElementById("table_header").style.display = "block";
                    //console.log("in all courses: ", is_empty);
                    //is_empty = false;
                    var giveaway = data.val();
                    let row = table.insertRow();
                    let button = create_button(false, giveaway);
                    button_place = row.insertCell(0);
                    button_place.appendChild(button);
                    let description = row.insertCell(1);
                    description.innerHTML = giveaway.Description;
                    let date = row.insertCell(2);
                    date.innerHTML = giveaway.Date;
                    let course = row.insertCell(3);
                    course.innerHTML = giveaway.Course;
                    make_new_caption(faculty, courses, show_all_courses);
                });
            });
        });
       
    }
    else {
        //console.log("in load_table_on_search(): course is not empty")
        //console.log("in the load_table_on_search() - run in loop for all courses chosen");
        //console.log("in the load_table_on_search() - length is: ", courses.length);
        for (var i = 0; i < courses.length; i += 1) {
            //console.log("in the load_table_on_search() - iteration num: ", i, "run on: ", courses[i]);
            var found_in_DB = find_giveaways_by_search(university, faculty, courses[i]);
            found_in_DB.once('value').then(function (datakey) {
                datakey.forEach(function (data) {
                    //console.log("in loop is_empty is: ", is_empty);
                    //reaching this point means table isn't empty. hide empy_msg & show header
                    //empty_msg.style.display = "none";
                    document.getElementById("table_header").style.display = "block";
                    //is_empty = false;
                    var giveaway = data.val();
                    // console.log("in the load_table_on_search(): give away is:", giveaway);
                    let row = table.insertRow();
                    let button = create_button(false, giveaway);
                    button_place = row.insertCell(0);
                    button_place.appendChild(button);
                    let description = row.insertCell(1);
                    description.innerHTML = giveaway.Description;
                    let date = row.insertCell(2);
                    date.innerHTML = giveaway.Date;
                    let course = row.insertCell(3);
                    course.innerHTML = giveaway.Course;
                    make_new_caption(faculty, courses, show_all_courses);
                });
            });
        }
        
    }
    //console.log("after all is_empty is: ", is_empty);
    //if (is_empty) {
    //    document.getElementById("table_caption").innerHTML = "אין חומרים למסירה בקורס שבחרת";
    //}
    sortTable(2, "search_table");
}

function sortTable(sort_by_col_num, table_name) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(table_name);
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[sort_by_col_num];
            y = rows[i + 1].getElementsByTagName("TD")[sort_by_col_num];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

//function load_user_table(university, email) {
//    console.log("in the load_user_table()");
//    // toggle table on
//    var table = document.getElementById("user_table");
//    var num_of_rows = table.rows.length;
//    // if table is already fill up, remove all previous search
//    if (num_of_rows > 1) {
//        for (var i = num_of_rows; i > 1; i--) {
//            table.deleteRow(i - 1);
//        }
//    }
//    // if table style is none  (hidden) - change it to inline (show)
//    // need to check validation of form - do only if form is submitted
//    if (table.style.display === "none") {
//        table.style.display = "inline";
//    }

//    /*
//     function for uploading table from DB
//     */
//    var found_in_DB = find_user_giveaways(university, email);

//    var keys = found_in_DB.once('value').then(function (faculty) {
//        faculty.forEach(function (course) {
//            course.forEach(funcion (data) {
//                if (data.val().Email.equalTo(email)) {
//                    console.log("in the load_user_table(): give away is: " ,giveaway)
//                    var giveaway = data.val();
//                    let row = table.insertRow();
//                    let button = create_button(true, giveaway);
//                    button_place = row.insertCell(0);
//                    button_place.appendChild(button);
//                    let description = row.insertCell(1);
//                    description.innerHTML = giveaway.Description;
//                    let date = row.insertCell(2);
//                    date.innerHTML = giveaway.Date;
//                    let course = row.insertCell(3);
//                    course.innerHTML = giveaway.Course;
//                }
//            });
//        });
//    });
//}

function make_new_caption(faculty, courses, show_all_courses) {

    // make new table caption
    var new_caption = "";
  
    new_caption = faculty;
    //console.log("new caption is: ", new_caption);
    if (!show_all_courses) {
        //console.log("not showing all courses");
        for (var i = 0; i < courses.length; i += 1) {
            new_caption = new_caption + " / " + courses[i];
            //console.log("new caption is: ", new_caption);
        }
    }
    else {
        new_caption = " עבור כל הקורסים ב " + faculty;
    }
    // change in HTML
    //console.log("final new caption is: ", new_caption);
    
    document.getElementById("table_caption").innerHTML = new_caption;

}

// creates the btn with the target email
function create_button(is_remove, ref, email) {
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-ps-table pull-right");

    // if it's הסר מהאתר button
    if (is_remove) {
        button.setAttribute("id", "remove_button");
        button.addEventListener('click', function () {
            confirm_remove_from_db(ref, email);
        });
        var icon = document.createElement("span");
        icon.className = "fas fa-trash-alt";
        button.innerHTML = " הסר ";
        button.appendChild(icon);
    }
    //else it's שלח בקשה button
    else {
        button.setAttribute("id", "email_button");
        //console.log("in create_btn target is " + target_email);
        button.addEventListener('click', function () {
            new_mail_request(ref.Email, ref.Faculty, ref.Course);
        });
        var icon = document.createElement("span");
        icon.className = "fas fa-envelope";
        button.innerHTML = "  שלח בקשה  ";
        button.appendChild(icon);
    }
    return button;
}

function new_mail_request(target_email, target_faculty, target_course) {
    console.log("in new_mail target is " + target_email);
    // prepare data to send
    var faculty = target_faculty;
    var course = target_course;

    // get from table!
    var giver_email = target_email;
    var subject = "PaperShare: אני מעוניין/ת בחומרי הלימוד שלך";
    var body = "היי, ראיתי שאת/ה מוסר/ת חומרי לימוד ב " + course + "," +" אשמח לקבל אותם ממך! אם כבר מסרת את חומרי הלימוד, ניתן להסיר אותם מהאתר ";
    let send_us_copy = "papershareproject@gmail.com"

    // email sender
    //window.open("mailto:" + giver_email + '?cc=' + send_us_copy + '&subject=' + subjet + '&body=' + body);
    mail_str = "https://mail.google.com/mail/u/0/?view=cm" + "&to=" + giver_email + '&cc=' + send_us_copy + "&su=" + subject + '&body=' + body + "&fs=1&tf=1";
    window.open(mail_str);
    //location.href = "https://mail.google.com/mail/u/0/?view=cm" + "&to=" + giver_email + '&cc=' + send_us_copy + "&su=" + subject + '&body=' + body + "&fs=1&tf=1";

    //"email sender from technion+ app"
    //location.href = "https://mail.google.com/mail/u/0/?view=cm&amp;to=" + giver_email + "&amp;su=" + subject + "&amp;fs=1&amp;tf=1"   
    //<a id="bws" target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&amp;to=print.bws@campus.technion.ac.il&amp;su=���� ���� ���� ���&amp;fs=1&amp;tf=1"><span class="img_container"><img src="icons/page.svg"></span> ���� ���, ��-����</a>
}

function check_submit() {
    $("[data-toggle='popover']").popover('destroy');
    console.log("inside submit func")
    document.getElementById("checkbox_input").setAttribute("style", "color:grey");
    document.getElementById("description_input").setAttribute("class", "row");
    document.getElementById("course_input").setAttribute("class", "row pull-right");
    document.getElementById("faculty_input").setAttribute("class", "row pull-right");

    if (document.getElementById("give_away_faculties").value != "") {
 
        if (document.getElementById("give_away_courses").value != "") {

            if (document.getElementById("Description").value != "") {

                if (document.getElementById("agree-terms").checked) {

                    $("#submission_modal").modal();
                    return true;
                }
                else {
                    document.getElementById("checkbox_input").setAttribute("style", "color:red");
                }
            }
            else {
                document.getElementById("description_input").setAttribute("class", "row has-error");
            }
        }
        else {
            document.getElementById("course_input").setAttribute("class", "row pull-right has-error");
        }
    }
    else {
        document.getElementById("faculty_input").setAttribute("class", "row pull-right has-error");
    }
    $("[data-toggle='popover']").popover('show');
    return false;
}

function giveaway_modal(action, university, email) {
    $('#submission_modal').modal('hide');
    document.getElementById("Description").value = "";
    $('#agree-terms').prop('checked', false);
    if (action == "close") {
        $('#give_away_faculties').selectpicker('val', '0');
        $('#give_away_courses').selectpicker('val', '0');
    }
    else if (action == "my_giveaway") {
        console.log("inside my giveaway");
        $('[href="#menu2"]').tab('show');
    }
    load_my_giveaways(university, email);
    return;
}
