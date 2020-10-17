/* meanwhile, this function is doing nothing - need to call it somehow from menu.html when loading
*/

var universities_faculties_lists = new Array(2);
universities_faculties_lists['Technion'] = Technion_faculties_list;
universities_faculties_lists['TAU'] = TAU_faculties_list;

var universities_courses_lists = new Array(2);
universities_courses_lists['Technion'] = Technion_courses_lists;
universities_courses_lists['TAU'] = TAU_courses_lists;


function faculties_dropdown(university) {
    console.log("in faculties_dropdown()");
    console.log(university);

    // get list
    var faculties_list = universities_faculties_lists[university];

    // get faculty select by id
    var cSelect = document.getElementById("search_faculties");
    // remove default option
    while (cSelect.options.length > 0) {
        cSelect.remove(0);
    }
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
        catch(e) {
            cSelect.appendChild(newOption);
        }
    }
    // update data in select
    $('.selectpicker').selectpicker('refresh');
}

function courses_dropdown(selectObj, university) {
    // get the index of the selected option 
    var idx = selectObj.selectedIndex;
    // get the value of the selected option 
    var which = selectObj.options[idx].value;
    // use the selected option value to retrieve the list of items from the countryLists array 
    var courses_lists = universities_courses_lists[university];
    cList = courses_lists[which];
    // get the country select element via its known id 
    var cSelect = document.getElementById("search_courses");
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
