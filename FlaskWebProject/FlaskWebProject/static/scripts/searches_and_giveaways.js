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

    //console.log("in the parse_and_upload_giveaway() - university: " + university);
    //console.log("in the parse_and_upload_giveaway() - email: " + email);
    //console.log("in the parse_and_upload_giveaway() - faculty: " + faculty);
    //console.log("in the parse_and_upload_giveaway() - course: " + course);
    //console.log("in the parse_and_upload_giveaway() - description: " + description);
    //console.log("in the parse_and_upload_giveaway() - date: " + date);

    add_giveaway_to_db(university, email, user, faculty, course, description, date);
}

function load_table_on_search(university) {
    console.log("in the load_table_on_search()");

    $("[data-toggle='popover']").popover('destroy');
    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("search_courses");
    var course = course_select.options[course_select.selectedIndex].text;

    if (faculty_select.value == "") {
        $("[data-toggle='popover']").popover('show');
        document.getElementById("table_caption").innerHTML = "";
        return;
    }

    make_new_caption(faculty, course);

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
    // need to check validation of form - do only if form is submitted
    if (table.style.display === "none") {
        table.style.display = "inline";
    }

    /*
     function for uploading table from DB
     */
    var found_in_DB = find_giveaways_by_search(university, faculty, course);
    if (course == '') {
        var keys = found_in_DB.once('value').then(function (coursekey) {
            coursekey.forEach(function (course) {
                course.forEach(function (data) {
                    var giveaway = data.val();
                    console.log("this is the target email " + giveaway.Email);
                    let row = table.insertRow();
                    let button = create_button(giveaway.Email, giveaway.Faculty, giveaway.Course);
                    button_place = row.insertCell(0);
                    button_place.appendChild(button);

                    let description = row.insertCell(1);
                    description.innerHTML = giveaway.Description;
                    let date = row.insertCell(2);
                    date.innerHTML = giveaway.Date;
                    let course = row.insertCell(3);
                    course.innerHTML = giveaway.Course;
                });
            });
        });
    }
    else {
        console.log("in load_table_on_search(): course is not empty")
        var keys = found_in_DB.once('value').then(function (datakey) {
            datakey.forEach(function (data) {
                var giveaway = data.val();
                console.log("this is the target email " + giveaway.Email);
                let row = table.insertRow();
                let button = create_button(giveaway.Email, giveaway.Faculty, giveaway.Course);
                button_place = row.insertCell(0);
                button_place.appendChild(button);

                let description = row.insertCell(1);
                description.innerHTML = giveaway.Description;
                let date = row.insertCell(2);
                date.innerHTML = giveaway.Date;
                let course = row.insertCell(3);
                course.innerHTML = giveaway.Course;
            });
        });

 
    }
    //if (is_table_empty == true) {
    //    console.log("inside is_empty which is: " + is_empty);
    //    document.getElementById("table_caption").innerHTML = "מצטערים, אין חומרים למסירה בקורס שבחרת!";
    //    document.getElementById("table_header").style.display = "none";
    //}
    //console.log("table.rows.length is: " + document.getElementById("search_table").rows.length);

}

function load_user_table(university, email) {
    console.log("in the load_user_table()");

    // toggle table on
    var table = document.getElementById("user_table");
    var num_of_rows = table.rows.length;
    // if table is already fill up, remove all previous search
    if (num_of_rows > 1) {
        for (var i = num_of_rows; i > 1; i--) {
            table.deleteRow(i - 1);
        }
    }
    // if table style is none  (hidden) - change it to inline (show)
    // need to check validation of form - do only if form is submitted
    if (table.style.display === "none") {
        table.style.display = "inline";
    }

    /*
     function for uploading table from DB
     */
    var found_in_DB = find_user_giveaways(university, email);

    var keys = found_in_DB.once('value').then(function (faculty) {
        faculty.forEach(function (course) {
            course.forEach(function (data) {
                if (data.val().Email.equalTo(email)) {
                    let row = table.insertRow();
                    let button = create_button();
                    button_place = row.insertCell(0);
                    button_place.appendChild(button);

                    var giveaway = data.val();

                    let description = row.insertCell(1);
                    description.innerHTML = giveaway.Description;
                    let date = row.insertCell(2);
                    date.innerHTML = giveaway.Date;
                    let course = row.insertCell(3);
                    course.innerHTML = giveaway.Course;
                }
            });
        });
    });
}

function make_new_caption(faculty, course) {
    // make new table caption
    var new_caption = faculty + " / " + course;
    // change in HTML
    document.getElementById("table_caption").innerHTML = new_caption;
}

// creates the btn with the target email
function create_button(target_email, faculty, course) {
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-ps pull-right");
    button.setAttribute("id", "email_button");
    console.log("in create_btn target is " + target_email);
    button.addEventListener('click', function () {
        new_mail_request(target_email, faculty, course);
    });

    button.innerHTML = "שלח בקשה";
    return button;
}

function new_mail_request(target_email, target_faculty, target_course) {
    console.log("in new_mail target is " + target_email);
    // prepare data to send
    //var faculty = document.getElementById("search_faculties").options[document.getElementById("search_faculties").selectedIndex].text;
    //var course = document.getElementById("search_courses").options[document.getElementById("search_courses").selectedIndex].text;
    var faculty = target_faculty;
    var course = target_course;

    // get from table!
    var giver_email = target_email;
    var subject = "PaperShare: אני מעוניין בחומרי לימוד שלך!";
    var body = "פנייה בנוגע למסירת חומרי לימוד בקורס " + course;
    let send_us_copy = "papershare@gmail.com"

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
    if (document.getElementById("give_away_faculties").value != ""){
        if (document.getElementById("give_away_courses").value != ""){
            if (document.getElementById("Description").value != ""){
                if (document.getElementById("agree-terms").checked){
                    $("#submission_modal").modal();
                    return true;
                }
            }
        }
    }
    $("[data-toggle='popover']").popover('show');
    return false;
}

function giveaway_modal(action) {
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
    return;
}
