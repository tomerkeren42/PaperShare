﻿function parse_and_upload_giveaway(university, email, user, date) {

    $(".giveaway_inst").each(function () {
        var faculty_select = $(this).getElementById("give_away_faculties");
        var faculty = faculty_select.options[faculty_select.selectedIndex].text;

        var course_select = $(this).getElementById("give_away_courses");
        var course = course_select.options[course_select.selectedIndex].text;

        var description_input = $(this).getElementById("Description");
        var description = description_input.value;

        console.log("faculty: " + faculty);
        console.log("course: " + course);
        console.log("description: " + description);

    });

    //if (!check_giveaway_submit()) {
    //    return;
    //}
    //// get variables
    //var faculty_select = document.getElementById("give_away_faculties");
    //var faculty = faculty_select.options[faculty_select.selectedIndex].text;
    //var course_select = document.getElementById("give_away_courses");
    //var course = course_select.options[course_select.selectedIndex].text;
    //
    //var description_input = document.getElementById("Description");
    //var description = description_input.value;
    //
    //var location_input = document.getElementById("Location");
    //var location = location_input.value;
    //
    //var phone_input = document.getElementById("Phone");
    //var phone = phone_input.value;
    //
    //add_giveaway_to_db(university, email, user, faculty, course, description, location, phone, left_to_right_date(date));
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

function add_giveaway_form(email) {  
    var numItems = $('.giveaway_inst').length
    //console.log("number of giveaway_inst: ", numItems);
    //console.log("email: ", email);

    //var clone = $(".giveaway_inst").first().clone();
    var clone = $(".giveaway_inst").first().clone();
    var clone_id = "giveaway_" + numItems;
    clone.prop('id', clone_id);

    //console.log("id: ", id);
    //console.log("faculties_select_id: ", faculties_select_id);

    var close_btn_str = "<button type='button' data-id='" + clone_id + "' onclick='remove_giveaway_row(this)' class='btn btn-danger remove-row'>הסר/י מסירה</button>";
    //console.log("close_btn_str: ", close_btn_str);
    clone.append(close_btn_str);

    //var faculties_select = clone.children().find("give_away_faculties");
    //var faculties_select_id = document.getElementById("give_away_faculties");
    //console.log("faculties_select by id: ", faculties_select_id);

    //var faculties_select_class = document.getElementsByClassName("selectpicker");
    //console.log("faculties_select by class: ", faculties_select_class);

    //console.log("clone: ", clone);
    //console.log("clone.childNodes: ", clone[0].childNodes);

    var faculty_input = clone[0].childNodes[5];
    var faculty_input_div_id = "faculty_input_" + numItems;
    var faculties_select_id = "give_away_faculties_" + numItems;
    faculty_input.setAttribute('id', faculty_input_div_id);
    faculty_input.getElementsByClassName("selectpicker pull-right")[0].setAttribute('id', faculties_select_id);
    faculty_input.getElementsByClassName("dropdown bootstrap-select pull-right bs3")[0].getElementsByClassName("btn dropdown-toggle bs-placeholder btn-default")[0].setAttribute('data-id', faculties_select_id);

    var course_input = clone[0].childNodes[13];
    var course_input_div_id = "course_input_" + numItems;
    var courses_select_id = "give_away_courses_" + numItems;
    course_input.setAttribute('id', course_input_div_id);
    course_input.getElementsByClassName("selectpicker pull-right")[0].setAttribute('id', courses_select_id);
    course_input.getElementsByClassName("dropdown bootstrap-select pull-right bs3")[0].getElementsByClassName("btn dropdown-toggle bs-placeholder btn-default")[0].setAttribute('data-id', courses_select_id);

    var description_input = clone[0].childNodes[20];
    var description_input_div_id = "description_input_" + numItems;
    var description_input_id = "Description_" + numItems;
    description_input.setAttribute('id', description_input_div_id);
    description_input.getElementsByClassName("form-control pull-right text-right col-sx-10")[0].setAttribute('id', description_input_id);

    console.log("faculty_input: ", faculty_input);
    console.log("course_input: ", course_input);
    console.log("description_input: ", description_input);

    //console.log("faculty_input.getElementsByClassName()[0]: ", faculty_input.getElementsByClassName("selectpicker pull-right")[0]);
    //console.log("test: ", faculty_input.getElementsByClassName("dropdown bootstrap-select pull-right bs3")[0].getElementsByClassName("btn dropdown-toggle bs-placeholder btn-default")[0]);

    //var faculties_select_curr_id = faculties_select.id;
    //console.log("faculties_select_curr_id: ", faculties_select_curr_id);
    //
    //
    //while (faculties_select.options.length > 0) {
    //    faculties_select.remove(0);
    //}
    //faculties_select.id = faculties_select_id;

    clone.insertBefore(".add");  
    
    //console.log("clone id: ", clone.attr('id'));
}

function remove_giveaway_row(CurrObj) {
    var obj_id = CurrObj.getAttribute('data-id');
    console.log("in remove giveaway row");
    console.log("obj_id: ", obj_id);

    //$(".giveaway_inst").remove();
    //CurrObj.parent().remove();
    document.getElementById(obj_id).remove();
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
    document.getElementById('Phone').value = '';
    document.getElementById('Location').value = '';
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

function create_new_giveaway_block() {
    var main_container = document.getElementById("giveaway_container");

    var numItems = $('.giveaway_inst').length
    //var numItems = document.getElementsByClassName('giveaway_inst').length
    //var numItems = document.getElementById("hat_id").length;
    console.log("in create_new_giveaway_block, inst_num = ", numItems);

    var id = "giveaway_" + numItems;
    var faculties_input_id = "faculties_input_id" + numItems;
    var faculties_select_id = "faculties_select_id" + numItems;

    var block_div = document.createElement("div");
    block_div.setAttribute("class", "giveaway_inst");
    block_div.setAttribute("id", id);

    //Header
    var row_div = document.createElement("div");
    block_div.setAttribute("class", "row");

    var faculty_courses_header_p = document.createElement("p");
    faculty_courses_header_p.setAttribute("class", "text-right");
    faculty_courses_header_p.innerHTML = "פקולטה וקורס";

    var header_icon = document.createElement("i");
    header_icon.setAttribute("class", "fas fa-graduation-cap");
    header_icon.setAttribute("id", "hat_id");

    var header_star = document.createElement("i");
    header_star.setAttribute("style", "color:red");
    header_star.innerHTML = " * ";

    faculty_courses_header_p.appendChild(header_star);
    faculty_courses_header_p.appendChild(header_icon);
    row_div.appendChild(faculty_courses_header_p);

    //Faculty selection
    var faculty_input_div = document.createElement("div");
    faculty_input_div.setAttribute("class", "row pull - right");
    faculty_input_div.setAttribute("style", "text-align: right; font-size: 20px;");
    faculty_input_div.setAttribute("id", faculties_input_id);

    var faculty_selection = document.createElement("select");
    faculty_selection.setAttribute("class", "selectpicker pull-right");
    faculty_selection.setAttribute("data-live-search", "true");
    faculty_selection.setAttribute("title", "בחר פקולטה");
    faculty_selection.setAttribute("id", faculties_select_id);
    faculty_selection.setAttribute("onchange", "courses_dropdown(this, 'give_away_courses', '{{university}}');");
    faculty_selection.setAttribute("dir", "rtl");
    faculty_selection.setAttribute("style", "text-align: right; font-size: 20px;");

    faculty_input_div.appendChild(faculty_selection);

    //seatsDiv.appendChild(document.createElement("br"));


    block_div.appendChild(row_div);
    block_div.appendChild(faculty_input_div);
    main_container.appendChild(block_div);


}
//<div class="giveaway_inst">
//    <div class="row">
//        <p class="text-right"><i style="color:red"> * </i>פקולטה וקורס <i class="fas fa-graduation-cap"></i></p>
//    </div>
//
//    <!--Faculty selection-->
//    <div class="row pull-right" style="text-align: right; font-size: 20px;" id="faculty_input">
//        <select class="selectpicker pull-right" data-live-search="true" title="בחר פקולטה" id="give_away_faculties" onchange="courses_dropdown(this, 'give_away_courses', '{{university}}');" dir="rtl" style="text-align: right; font-size: 20px;">
//            <option value="0" style="text-align: right; font-size: 20px;">Select a faculty</option>
//        </select>
//    </div>
//    <br />
//    <br />
//
//    <!--Course selection-->
//    <div class="row pull-right" style="text-align: right; font-size: 20px;" id="course_input">
//        <select class="selectpicker pull-right" data-live-search="true" title="בחר קורס" id="give_away_courses" dir="rtl">
//            <option value="0">Select a faculty first</option>
//        </select>
//    </div>
//    <br /><br />
//
//    <!--Description input-->
//    <div class="row" id="description_input">
//        <p class="text-right"><i style="color:red"> * </i>תיאור <i class="fas fa-book"></i></p>
//        <input class="form-control pull-right text-right col-sx-10" id="Description" dir="rtl" style="font-size:initial" placeholder="מה את\ה מוסר\ת?">
//    </div>
//    <br />
//    <hr />
//    <br />
//</div>