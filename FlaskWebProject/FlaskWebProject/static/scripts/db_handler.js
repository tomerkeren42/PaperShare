
﻿function get_db_course_name(course) {
    var res_course_name;
    res_course_name = course.replace(".", "");
    res_course_name = res_course_name.replace("#", "");
    res_course_name = res_course_name.replace("]", "");
    res_course_name = res_course_name.replace("[", "");

    return res_course_name;
}
function add_giveaway_to_db(university, email, user, faculty, course, description_str, location_str, phone_str, upload_date) {
    // A post entry.
    var postData = {
        Faculty: faculty,
        Course: course,
        Description: description_str,
        Location: location_str,
        Phone: phone_str,
        Email: email,
        User: user,
        Date: upload_date
    };

    var db_path = university + '/uploads/' + faculty + '/' + get_db_course_name(course) + '/';
    //var user_uploads_path = university + '/users/' + user_name + '/' + "uploads";

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child(db_path).push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates[db_path + newPostKey] = postData;
    //updates[user_uploads_path].push(newPostKey);

    return firebase.database().ref().update(updates);
}
function find_giveaways_by_search(university, faculty, course) {
    var db = firebase.database();
    var search_path;
    var ref;

    if (course == '') {
        search_path = university + '/uploads/' + faculty;
        ref = db.ref(search_path);
        //check if work
        // ref = firebase.database().ref(university + '/uploads/' + faculty);
    }
    else {
        search_path = university + '/uploads/' + faculty + '/' + get_db_course_name(course);
        ref = db.ref(search_path).orderByChild('Course').equalTo(course);
        //check if work
        // ref = firebase.database().ref(university + '/uploads/' + faculty + '/' + get_db_course_name(course)).orderByChild('Course').equalTo(course);
    }
    return ref;
}
function get_uploads_ref(university) {
    var db = firebase.database();
    var search_path = university + '/uploads/';
    var ref = db.ref(search_path);

    return ref;

    //check if work:
    //return firebase.database().ref(university + '/uploads/');
}
function confirm_remove_from_db(path, email) {
    var remove_button = document.getElementById("confirm_remove_button");
    remove_button.onclick = function () {
        remove_from_db(path, email);
    }
    $("#remove_modal").modal();
}
function remove_from_db(path, email) {
    var split_path = path.split("/");
    var university = split_path[0];
    var ref_to_delete = firebase.database().ref(path);
    ref_to_delete.remove();
    load_my_giveaways(university, email);
    load_table_on_search(university, email);
}