import pyrebase


class firebase_db(object):
    """description of class"""

    # initiate the class
    def __init__(self):
        self.config = {
            "apiKey"                : "AIzaSyBJ20paxlR6HuiqNai2ecOa87V4AhFcsMo",
            "authDomain"            : "paper-share.firebaseapp.com",
            "databaseURL"           : "https://paper-share.firebaseio.com",
            "projectId"             : "paper-share",
            "storageBucket"         : "paper-share.appspot.com",
            "messagingSenderId"     : "716824219562",
            "appId"                 : "1:716824219562:web:9746189bbe2c9efbe165d3",
            "measurementId"         : "G-QXR9SVGB3F"
        }
        self.firebase = pyrebase.initialize_app(self.config)
        self.db = self.firebase.database()

    def add_new_user(self, name, email, university):
        uploads = []
        new_user_data = {
            'name'          :   name,
            'email'         :   email,
            'university'    :   university,
            'uploads'       :   uploads
        }
        self.db.child(university).child('users').child(name).set(new_user_data)


    def delete_user(self, name, university):
        self.db.child(university).child('users').child(name).remove()

    def is_user_in_db(self, name, email, university):
        name_for_db = self.delete_point_in_name(name)
        all_users_keys = self.db.child(university).child('users').shallow().get().val()
        if (all_users_keys is not None) and (name_for_db in all_users_keys):
            return True
        else:
            return False


app_DB = firebase_db()
