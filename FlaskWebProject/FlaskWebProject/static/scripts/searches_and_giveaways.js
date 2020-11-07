function parse_and_upload_giveaway(university, email, user, date) {
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
    add_giveaway_to_db(university, email, user, faculty, course, description, left_to_right_date(date));
}

function left_to_right_date(date) {
    let splitted_date = date.split("-");
    let new_date = splitted_date[2] + "-" + splitted_date[1] + "-" + splitted_date[0];
    return new_date;
}

function load_table_on_search(university, email) {

    $("[data-toggle='popover']").popover('destroy');

    var faculty_select = document.getElementById("search_faculties");

    if (faculty_select.value == "") {
        $("[data-toggle='popover']").popover('show');
        document.getElementById("table_caption").innerHTML = "";
        return;
    }

    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var courses = $('#search_courses').val();

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

    document.getElementById("table_header").style.display = "none";

    // if "all courses" is chosen
    document.getElementById("table_caption").innerHTML = "אין חומרים למסירה בקורס שבחרת";
    if (show_all_courses) {
        var found_in_DB = find_giveaways_by_search(university, faculty, "");
        found_in_DB.once('value').then(function (coursekey) {
            coursekey.forEach(function (course) {
                course.forEach(function (data) {
                    //reaching this point means table isn't empty. hide empy_msg & show header
                    document.getElementById("table_header").style.display = "block";
                    var giveaway = data.val();
                    let row = table.insertRow();
                    let button = create_button(false, giveaway, email);
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
        for (var i = 0; i < courses.length; i += 1) {
            var found_in_DB = find_giveaways_by_search(university, faculty, courses[i]);
            found_in_DB.once('value').then(function (datakey) {
                datakey.forEach(function (data) {
               
                    document.getElementById("table_header").style.display = "block";
                    var giveaway = data.val();
                    let row = table.insertRow();
                    let button = create_button(false, giveaway, email);
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

function make_new_caption(faculty, courses, show_all_courses) {

    // make new table caption
    var new_caption = "";
  
    new_caption = faculty;
    if (!show_all_courses) {
        for (var i = 0; i < courses.length; i += 1) {
            new_caption = new_caption + " / " + courses[i];
        }
    }
    else {
        new_caption = " עבור כל הקורסים ב " + faculty;
    }
    // change in HTML  
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
        icon.className = "fas fa-trash";
        button.innerHTML = " הסר ";
        button.appendChild(icon);
    }
    //if it's a submission by me
    else if (email == ref.Email){
        button.setAttribute("id", "byme_button");
        button.innerHTML = "  מסירה שלי  ";
        button.addEventListener('click', function () {
            $('[href="#menu2"]').tab('show');
        });
        var icon = document.createElement("span");
        icon.className = "fas fa-user-check";
        button.appendChild(icon);
    }
    //else it's שלח בקשה button
    else {
        button.setAttribute("id", "email_button");
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
    // prepare data to send
    var course = target_course;
    // get from table!
    var giver_email = target_email;
    var subject = "PaperShare: אני מעוניין/ת בחומרי הלימוד שלך";
    var body = "היי, ראיתי שאת/ה מוסר/ת חומרי לימוד ב " + course + "," + " אשמח לקבל אותם ממך! " + "%0D%0A" + "אם כבר מסרת את חומרי הלימוד, ניתן להסיר אותם מהאתר" + "%0D%0A";
    var body = body + "תודה רבה!";
    let send_us_copy = "papershareproject@gmail.com"

    // email sender
    mail_str = "https://mail.google.com/mail/u/0/?view=cm" + "&to=" + giver_email + '&cc=' + send_us_copy + "&su=" + subject + '&body=' + body + "&fs=1&tf=1";
    window.open(mail_str);
}

function check_submit() {
    $("[data-toggle='popover']").popover('destroy');
    document.getElementById("checkbox_input").setAttribute("style", "color:black");
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
                    document.getElementById("checkbox_input").setAttribute("style", "color:darkred");
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
        $('[href="#menu2"]').tab('show');
    }
    load_my_giveaways(university, email);
    return;
}

function search_clear() {
    selectpicker_clear("search_courses");
    $('#search_faculties').selectpicker('val', '0');
    return;
}

function giveaway_clear() {
    selectpicker_clear("give_away_courses");
    $('#give_away_faculties').selectpicker('val', '0');
    document.getElementById('Description').value = '';
    document.getElementById('agree-terms').checked = false;
    document.getElementById("checkbox_input").setAttribute("style", "color:black");


    var table = document.getElementById("search_table");
    var num_of_rows = table.rows.length;

    // if table is already fill up, remove all previous search
    if (num_of_rows > 1) {
        for (var i = num_of_rows; i > 1; i--) {
            table.deleteRow(i - 1);
        }
    }
    return;
}

function selectpicker_clear(select_id) {
    var select = document.getElementById(select_id);
    while (select.options.length > 0) {
        select.remove(0);
    }
    var jquery_select = "#" + select_id;
    $(jquery_select).selectpicker('val', 0);
    $('.selectpicker').selectpicker('refresh');
}
