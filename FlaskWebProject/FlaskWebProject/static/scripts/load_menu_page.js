function load_html(university, email) {
    load_faculties_dropdown(university, 0);
    load_my_giveaways(university, email);
}

function load_faculties_dropdown(university, numItems) {
    console.log("in load_faculties_dropdown(): university = ", university, " numItems = ", numItems);

    var faculties_select_id;
    // get list
    var faculties_list = universities_faculties_lists[university];
    faculties_list.sort();


    // get faculty select by id
    if (numItems == 0)
        faculties_select_id = "give_away_faculties";
    else
        faculties_select_id = "give_away_faculties_" + numItems;

    console.log("in load_faculties_dropdown(): faculties_select_id = ", faculties_select_id);
    var dSelect = document.getElementById(faculties_select_id);
    var cSelect = document.getElementById("search_faculties");

    // remove default option
    while (dSelect.options.length > 0) {
        console.log("in load_faculties_dropdown(): in the while(), dSelect.options.length = ", dSelect.options.length);
        if (numItems == 0)
            cSelect.remove(0);
        dSelect.remove(0);
    }

    console.log("in load_faculties_dropdown(): out of the while()");

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
                dSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE
            }
            catch (e) {
                dSelect.appendChild(newOption);
            }
        }
        $('.selectpicker').selectpicker('refresh');
        if (numItems == 0)
            dSelect = cSelect;
            //cSelect = dSelect;
        //dSelect = cSelect;
    }
}

function load_my_giveaways(university, email) {
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
    if (table.style.display === "none") {
        table.style.display = "inline";
    }
    init_my_giveaway_table(university, email);
    sortTable(3, 'user_table');
}