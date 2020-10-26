function add_giveawat_to_db(university, email, faculty, course, description_str, upload_date) {
    console.log("in the add_giveawat_to_db()");

    // A post entry.
    var postData = {
        Faculty: faculty,
        Course: course,
        Description: description_str,
        Email: email,
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
    console.log("in the find_giveaways_by_search()");
    var db = firebase.database();
    var search_path;
    var ref;

    if (course == '') {
        console.log("in the find_giveaways_by_search(), course is None");
        search_path = university + '/uploads/' + faculty;
        ref = db.ref(search_path).orderByChild();//'Faculty').equalTo(faculty);
    }
    else {
        console.log("in the find_giveaways_by_search(), course isn't None");
        search_path = university + '/uploads/' + faculty + '/' + course;
        ref = db.ref(search_path).orderByChild('Course').equalTo(course);
    }

    /*
    ref.once('value', snapshot => {
        if (snapshot.exists()) {
            var giveaway = snapshot.val();
            giveaway = Object.values(giveaway);
            description = giveaway[0].Description;
            console.log('description : ' + description);
        }
        else {
            console.log('No match for this course: ' + course)
        }
    });
    */
    return ref;
}

// getNameByEmail(email) {
//     var db = firebase.database();
//     var ref = db.ref('users').orderByChild('email').equalTo(email);
//     ref.once('value', snapshot => {
//         if (snapshot.exists()) {
//             var name = snapshot.val();
//             name = Object.values(name);
//             name = name[0].name;
//             console.log('User email : ' + email + ' User name: ' + name);
//         } else {
//             console.log('There is no user who has email like ' + email)
//         }
//     })
// 
// }