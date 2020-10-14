//alert(Technion_courses_lists.back);

/* courses_dropdown() is called from the onchange event of a select element.
* param selectObj - the select object which fired the on change event. 
*/


/* meanwhile, this function is doing nothing - need to call it somehow from menu.html when loading
*/
function faculties_dropdown() {
    console.log("in faculties_dropdown()")
    // get list
    var Technion_faculties_list = ["Paper Share Team", "Rick And Morty", "Modern Family", "South Park"];
    // get faculty select by id
    var cSelect = document.getElementById("search_faculties");
    // remove default option
    while (cSelect.options.length > 0) {
        cSelect.remove(0);
    }
    // start adding all options from list to select
    for (var i = 0; i < Technion_faculties_list.length; i++) {
        newOption = document.createElement("option");
        newOption.value = Technion_faculties_list[i];  // assumes option string and value are the same
        newOption.text = Technion_faculties_list[i];
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

function courses_dropdown(selectObj) {
    // get the index of the selected option 
    var idx = selectObj.selectedIndex;
    // get the value of the selected option 
    var which = selectObj.options[idx].value;
    // use the selected option value to retrieve the list of items from the countryLists array 
    cList = Technion_courses_list[which];
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
