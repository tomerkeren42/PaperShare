function courses_dropdown(selectObj, course_select_id, university) {
    // get the index of the selected option 
    var idx = selectObj.selectedIndex;
    // get the value of the selected option 
    var which = selectObj.options[idx].value;
    // use the selected option value to retrieve the list of items from the countryLists array 
    var courses_lists = universities_courses_lists[university];
    cList = courses_lists[which];
    // get the country select element via its known id 
    var cSelect = document.getElementById(course_select_id);
    // remove the current options from the country select 
    selectpicker_clear(course_select_id);

    var newOption;
    // only on search tab, make this "all courses" option
    if (course_select_id != 'give_away_courses') {
        newOption = document.createElement("option");
        newOption.value = '';  // assumes option string and value are the same 
        newOption.text = "כל הקורסים";
        newOption.style.textAlign = "right";
        // add the new option 
        try {
            cSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE 
        }
        catch (e) {
            cSelect.appendChild(newOption);
        }
    }
    // create new options 

    for (var i = 0; i < cList.length; i++) {
        newOption = document.createElement("option");
        newOption.value = cList[i];  // assumes option string and value are the same 
        newOption.text = cList[i];
        newOption.style.textAlign = "right";

        if (detectMob()) {
            newOption.style.maxWidth = "300px";
            newOption.style.textAlign = "left";
        }       
        // add the new option 
        try {
            cSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE 
        }
        catch (e) {
            cSelect.appendChild(newOption);
        }
    }
    $('.selectpicker').selectpicker('refresh');
}
function search_clear() {
    selectpicker_clear("search_courses");
    $('#search_faculties').selectpicker('val', '0');

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
                    new_search_table_header(faculty, courses, show_all_courses);
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
                    new_search_table_header(faculty, courses, show_all_courses);
                });
            });
        }

    }
    sortTable(2, "search_table");
}
function new_search_table_header(faculty, courses, show_all_courses) {

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
    if (detectMob()) {
        window.location.href = "mailto:" + giver_email + '?&cc=' + send_us_copy + "&subject=" + subject + '&body=' + body + '&fs=1&tf=1';
    }
    else {
        window.open(mail_str);
    }
}
