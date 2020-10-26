function add_giveaway_to_db(university, user_name, faculty, course, description_str) {
    console.log("in the add_giveawat_to_db()");

    var db_path = university + '/uploads/' + faculty + '/' + course;

    firebase.database().ref(db_path).set({
        Faculty:        faculty,
        Course:         course,
        Description:    description_str,
        User:           user_name
    });
}

function remove_from_db() {
    console.log("in the remove_from_db()");

    //var db_path = '/users/' + university + '/' + user + '/' + course;
    //firebase.database().ref(db_path).remove();

}