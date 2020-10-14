function load_table() {
    // get variables for new table caption
    var faculty_select = document.getElementById("search_faculties");
    var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    var course_select = document.getElementById("search_courses");
    var course = course_select.options[course_select.selectedIndex].text;
    // make new table caption
    var new_caption = "מציג חומרי לימוד מקורס " + course + " בפקולטה " + faculty;
    var caption = document.getElementById("table_caption");
    // change in HTML
    caption.innerHTML = new_caption;

    /*
     function for uploading table from DB
     */
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