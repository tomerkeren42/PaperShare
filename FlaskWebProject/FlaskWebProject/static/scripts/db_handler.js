function add_giveaway_to_db(university, email, user, faculty, course, description_str, upload_date) {

    //console.log("in the add_giveaway_to_db()");

    // A post entry.
    var postData = {
        Faculty: faculty,
        Course: course,
        Description: description_str,
        Email: email,
        User: user,
        Date: upload_date
    };

    var db_path = university + '/uploads/' + faculty + '/' + course + '/';
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
    }
    else {
        search_path = university + '/uploads/' + faculty + '/' + course;
        ref = db.ref(search_path).orderByChild('Course').equalTo(course);
    }
    return ref;
}

function find_user_giveaways(university, email) {
    var db = firebase.database();
    var search_path = university + '/uploads/';
    var ref = db.ref(search_path);
    return ref;
}

function remove_from_db(path, email) {
    var split_path = path.split("/");
    var university = split_path[0];
    var ref_to_delete = firebase.database().ref(path);
    ref_to_delete.remove()
        .then(function () {
           console.log("Remove succeeded.")
        })
        .catch(function (error) {
           console.log("Remove failed: " + error.message)
        });
    load_my_giveaways(university, email);
    load_table_on_search(university, email);
}

