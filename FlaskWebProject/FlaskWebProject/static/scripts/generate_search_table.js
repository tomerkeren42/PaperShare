function load_table() {
    // get variables for new table caption
    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("search_courses");
    var course = course_select.options[course_select.selectedIndex].text;
    // make new table caption
    var new_caption = "מציג חומרי לימוד מקורס " + course + " בפקולטה " + faculty;
    var new_caption = "Showing material from course " + course + " in faculty " + faculty + " and i cant make it work in hebrew, mr. itamar!";
    var caption = document.getElementById("table_caption");
    // change in HTML
    caption.innerHTML = new_caption;

    // toggle table on 
    var table = document.getElementById("search_table");
    // if table style is none  (hidden) - change it to inline (show)
    // need to check validation of form - do only if form is submitted
    if (table.style.display === "none") {
        table.style.display = "inline";
    }
    /*
     function for uploading table from DB
     */
    const found_in_DB = [
        { course: "חדשות 13", email: "adva_dadon@papershare.co.il", description: "בחלק הזה בקוד יכנס כל המידע האמיתי שנשיג מהדאטה בייס, בעזרת השם בצורה הזו בדיוק", button: "כאן יהיה כפתור"},
        { course: "ספורט5", email: "miri_nevo@papershare.co.il", description: "חברה של אלי אילדיס", button: "כאן יהיה כפתור" },
        { course: "חדשות 12", email: "tamar_ish_shalom@papershare.co.il", description: "גם מגישה מעולה וגם חכמה וגם יפה!", button: "כאן יהיה כפתור" },
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
    });
    // when finished, submit form
    document.getElementById("search_material").submit();
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