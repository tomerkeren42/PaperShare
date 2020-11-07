function parse_and_upload_giveaway(university, email, user, date) {
    if (!check_giveaway_submit()) {
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
function check_giveaway_submit() {
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
function giveaway_clear() {
    selectpicker_clear("give_away_courses");
    $('#give_away_faculties').selectpicker('val', '0');
    document.getElementById('Description').value = '';
    document.getElementById('agree-terms').checked = false;
    document.getElementById("checkbox_input").setAttribute("style", "color:black");
    return;
}
function init_my_giveaway_table(university, email) {
    var table = document.getElementById("user_table");
    var upload_ref = get_uploads_ref(university);
    upload_ref.once('value').then(function (faculty) {
        faculty.forEach(function (course) {
            course.forEach(function (course_giveaways) {
                course_giveaways.forEach(function (giveaway) {
                    giveaway_data = giveaway.val();
                    if (giveaway_data.Email == email) {
                        let row = table.insertRow();
                        let button = create_button(true, make_path(giveaway), email);
                        button_place = row.insertCell(0);
                        button_place.appendChild(button);

                        let description = row.insertCell(1);
                        description.innerHTML = giveaway_data.Description;

                        let date = row.insertCell(2);
                        date.innerHTML = giveaway_data.Date;

                        let course = row.insertCell(3);
                        course.innerHTML = giveaway_data.Course;
                    }
                });
            });
        });
    });
}
function make_path(upload) {
    var path_array = upload.ref_.path.pieces_;
    var path = path_array[0] + "/" + path_array[1] + "/" + path_array[2] + "/" + path_array[3] + "/" + path_array[4];
    return path;
}