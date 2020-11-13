import pyrebase


class firebase_db(object):
    """description of class"""

    # initiate the class
    def __init__(self):
        self.config = {
            "apiKey"                : "AIzaSyCebFrGEHN_IZyOVOc739txyvC1qYn61e8",
            "authDomain"            : "rules-tests.firebaseapp.com",
            "databaseURL"           : "https://rules-tests.firebaseio.com",
            "projectId"             : "rules-tests",
            "storageBucket"         : "rules-tests.appspot.com",
            "messagingSenderId"     : "556698880812",
            "appId"                 : "1:556698880812:web:0e36133f514707a6247a89",
            "measurementId"         : "G-CW1HH5S5C9"
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
        name_for_db = name
        all_users_keys = self.db.child(university).child('users').shallow().get().val()
        if (all_users_keys is not None) and (name_for_db in all_users_keys):
            return True
        else:
            return False


app_DB = firebase_db()
