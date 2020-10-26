//    // The core Firebase JS SDK is always required and must be listed first
//    src = "https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js";
//    
//    // TODO: Add SDKs for Firebase products that you want to use: "https:////firebase.google.com/docs/web/setup#available-libraries"
//    src = "https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js";
//    
//    // Your web app's Firebase configuration
//    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//    var firebaseConfig = {
//        apiKey: "AIzaSyBJ20paxlR6HuiqNai2ecOa87V4AhFcsMo",
//        authDomain: "paper-share.firebaseapp.com",
//        databaseURL: "https://paper-share.firebaseio.com",
//        projectId: "paper-share",
//        storageBucket: "paper-share.appspot.com",
//        messagingSenderId: "716824219562",
//        appId: "1:716824219562:web:9746189bbe2c9efbe165d3",
//        measurementId: "G-QXR9SVGB3F"
//    };
//    // Initialize Firebase
//    var app_firebase = firebase.initializeApp(firebaseConfig);
//    var app_DB = app_firebase.database();
//    var app_analytics = app_firebase.analytics();

//var app_DB = firebase.database();

function add_giveawat_to_db(university, user_name, faculty, course, description_str) {
    console.log("in the add_giveawat_to_db()");

    var db_path = university + '/uploads/' + faculty + '/' + course;

    firebase.database().ref(db_path).set({
        Faculty:        faculty,
        Course:         course,
        Description:    description_str,
        User:           user_name
    });
}