function parse_and_upload_giveaway() {
    console.log("in the parse_and_upload_giveaway()");
    // get variables
    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("search_courses");
    var course = course_select.options[course_select.selectedIndex].text;

    var user = document.getElementById("username");
    var university = document.getElementById("university");
    var description = document.getElementById("Description");

    console.log("in the parse_and_upload_giveaway() - faculty:");
    console.log(faculty);
    console.log("in the parse_and_upload_giveaway() - course:");
    console.log(course);
    console.log("in the parse_and_upload_giveaway() - university:");
    console.log(university);
    console.log("in the parse_and_upload_giveaway() - description:");
    console.log(description);
    console.log("in the parse_and_upload_giveaway() - user:");
    console.log(user);
}

function load_table() {
    // get variables for new table caption
    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("search_courses");
    var course = course_select.options[course_select.selectedIndex].text;

    // make new table caption
    var new_caption = faculty + " / " + course;
    // change in HTML
    document.getElementById("table_caption").innerHTML = new_caption;



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
    const found_in_DB = [
        { course: "חדשות 13", email: "13.13", description: "בחלק הזה בקוד יכנס כל המידע האמיתי שנשיג מהדאטה בייס, בעזרת השם בצורה הזו בדיוק", button: "כאן יהיה כפתור" },
        { course: "ספורט5", email: "10.13", description: "buisness plans", button: "כאן יהיה כפתור" },
        { course: "חדשות 12", email: "13.10", description: "more money making ideas", button: "כאן יהיה כפתור" },
    ];
    found_in_DB.forEach(item => {
        let row = table.insertRow();
        let button = row.insertCell(0);
        button.innerHTML = item.button;
        let description = row.insertCell(1);
        description.innerHTML = item.description;
        let email = row.insertCell(2);
        email.innerHTML = item.email;
        let course = row.insertCell(3);
        course.innerHTML = item.course;
        var x = table.rows.length;
    });
    // when finished, submit form
    // document.getElementById("search_material").submit();
}

function new_mail_request() {

    // prepare data to send
    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("search_courses");
    var course = course_select.options[course_select.selectedIndex].text;

    // get from table!
    var giver_email = "enter_email@papershare.co.il";
    var subjet = "can i get your things pliz";
    var body = "i want the thinsg in " + course + "from " + faculty;
    let send_us_copy = "papershare@gmail.com"

    // email sender
    window.open("mailto:" + giver_email + '?cc=' + send_us_copy + '&subject=' + subjet + '&body=' + body);
    location.href = "mailto:" + giver_email + '?cc=' + send_us_copy + '&subject=' + subjet + '&body=' + body;
}