function get_db_course_name(course) {
    var res_course_name;
    res_course_name = course.replace(".", "");
    res_course_name = res_course_name.replace("#", "");
    res_course_name = res_course_name.replace("]", "");
    res_course_name = res_course_name.replace("[", "");

    return res_course_name;
}
function selectpicker_clear(select_id) {
    var select = document.getElementById(select_id);
    while (select.options.length > 0) {
        select.remove(0);
    }
    var jquery_select = "#" + select_id;
    $(jquery_select).selectpicker('val', 0);
    $('.selectpicker').selectpicker('refresh');
}
// creates the btn in the search table for more details
function create_info_btn(data) {

    //get info from giveaway
    giveaway = data.val();
    var description = giveaway.Description;
    var phone = "";
    var location = "";
    if (giveaway.hasOwnProperty('Phone')) {
        phone = giveaway.Phone;
    }
    if (giveaway.hasOwnProperty('Location')) {
        location = giveaway.Location;
    }

    //set content to popover
    content = " <span class='fas fa-book pull-right'> </span>"+ description;
    if (location != "") {
        content += " <br\>" + location + " <span class='fas fa-map-marker-alt'> </span>";
    }
    if (phone != "") {
        content += " <br\>" + phone + " <span class='fas fa-mobile-alt'> </span>";
    }

    // make btn with id and class
    var info_btn = document.createElement("button");
    info_btn.setAttribute("id", "info_popover");
    info_btn.setAttribute("class", "btn btn-ps-table");
    
    //add icon to btn
    var icon = document.createElement("span");
    icon.className = "fas fa-info";
    info_btn.appendChild(icon);

    //change btn style
    info_btn.setAttribute("style", "font-size: 14");

    //change popover attributes
    info_btn.setAttribute("data-trigger", "hover");
    if (detectMob()) {
        info_btn.setAttribute("data-trigger", "click");
    };
    info_btn.setAttribute("data-placement", "right");
    info_btn.setAttribute("data-html", "true");
    info_btn.setAttribute("data-toggle", "popover");
    info_btn.setAttribute("data-content", content);
    
    // need to change trigger for mobile, not working for me now
    /*if (detectMob()) {
       info_btn.setAttribute("data-trigger", "click");
    }
    else {
       info_btn.setAttribute("data-trigger", "hover");
    }
    */
    //activate popover: <moved this to search_tab.js. it takes all popovers.
    //$('[data-toggle="popover"]').popover();
    return info_btn;
}
function create_button(is_remove, ref, email) {
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-ps-table pull-right");
    // if it's הסר מהאתר button
    if (is_remove) {
        button.setAttribute("id", "remove_button");
        button.addEventListener('click', function () {
            confirm_remove_from_db(ref, email);
        });
        var icon = document.createElement("span");
        icon.className = "fas fa-trash";
        button.innerHTML = " הסר ";
        button.appendChild(icon);
    }
    //if it's a submission by me
    else if (email == ref.Email) {
        button.setAttribute("id", "byme_button");
        button.innerHTML = "  מסירה שלי  ";
        button.addEventListener('click', function () {
            $('[href="#menu2"]').tab('show');
        });
        var icon = document.createElement("span");
        icon.className = "fas fa-user-check";
        button.appendChild(icon);
    }
    //else it's שלח בקשה button
    else {
        button.setAttribute("id", "email_button");
        button.addEventListener('click', function () {
            new_mail_request(ref.Email, ref.Course);
        });
        var icon = document.createElement("span");
        icon.className = "fas fa-envelope";
        button.innerHTML = "  שלח בקשה  ";
        button.appendChild(icon);
    }
    return button;
}
function sortTable(sort_by_col_num, table_name) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(table_name);
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[sort_by_col_num];
            y = rows[i + 1].getElementsByTagName("TD")[sort_by_col_num];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
function left_to_right_date(date) {
    let splitted_date = date.split("-");
    let new_date = splitted_date[2] + "-" + splitted_date[1] + "-" + splitted_date[0];
    return new_date;
}
function detectMob() {
    return Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
}