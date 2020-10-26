var universities_faculties_lists = new Array(4);
universities_faculties_lists['Technion'] = Technion_faculties_list;
universities_faculties_lists['TAU'] = TAU_faculties_list;
universities_faculties_lists['IDC'] = TAU_faculties_list;
universities_faculties_lists['BGU'] = TAU_faculties_list;

var universities_courses_lists = new Array(4);
universities_courses_lists['Technion'] = Technion_courses_lists;
universities_courses_lists['TAU'] = TAU_courses_lists;
universities_courses_lists['IDC'] = TAU_courses_lists;
universities_courses_lists['BGU'] = TAU_courses_lists;

function load_html(university, email) {
    load_faculties_dropdown(university);
    load_my_giveaways(university, email);
}

function load_my_giveaways(university, email) {
    console.log("in the load_my_giveaways()");

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

    var curr_email;
    var giveaway;

    var keys = found_in_DB.once('value').then(function (faculty) {
        faculty.forEach(function (course) {
            course.forEach(function (data) {
                giveaway = data.val();
                giveaway = Object.values(giveaway);
                curr_email = giveaway[0].Email;
                console.log("in the load_my_giveaways(), curr_email = " + curr_email);
                if (curr_email == email) {
                    console.log("in the load_my_giveaways(), in the if");
                    let row = table.insertRow();
                    let button = create_button();
                    button.innerHTML = "הסר מהאתר";
                    button.setAttribute("onclick", "confirm_remove_from_db();");
                    button_place = row.insertCell(0);
                    button_place.appendChild(button);

                    let description = row.insertCell(1);
                    description.innerHTML = giveaway[0].Description;
                    let date = row.insertCell(2);
                    date.innerHTML = giveaway[0].Date;
                    let course = row.insertCell(3);
                    course.innerHTML = giveaway[0].Course;
                }
            });
        });
    });
}

function confirm_remove_from_db() {
    $("#remove_modal").modal();
    

}
function load_faculties_dropdown(university) {
    // get list
    var faculties_list = universities_faculties_lists[university];
    // get faculty select by id
    var cSelect = document.getElementById("search_faculties");
    var dSelect = document.getElementById("give_away_faculties");
    // remove default option
    while (cSelect.options.length > 0) {
        cSelect.remove(0);
        dSelect.remove(0);
    }
    // work on both selects
    for (var j = 0; j < 2; j++) {
        // start adding all options from list to select
        for (var i = 0; i < faculties_list.length; i++) {
            newOption = document.createElement("option");
            newOption.value = faculties_list[i];  // assumes option string and value are the same
            newOption.text = faculties_list[i];
            newOption.style.textAlign = "right";
            // add the new option
            try {
                cSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE
            }
            catch (e) {
                cSelect.appendChild(newOption);
            }

        }
        $('.selectpicker').selectpicker('refresh');
        cSelect = dSelect;
    }
}

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
    var len = cSelect.options.length;
    while (cSelect.options.length > 0) {
        cSelect.remove(0);
    }
    var newOption;
    // create new options 
    for (var i = 0; i < cList.length; i++) {
        newOption = document.createElement("option");
        newOption.value = cList[i];  // assumes option string and value are the same 
        newOption.text = cList[i];
        newOption.style.textAlign = "right";
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
