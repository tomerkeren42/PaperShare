function load_html(university, email) {
    load_faculties_dropdown(university);
    load_my_giveaways(university, email);
}

function load_faculties_dropdown(university) {
    // get list
    var faculties_list = universities_faculties_lists[university];
    faculties_list.sort();
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