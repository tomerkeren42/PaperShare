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
        new_user_data = {
            'name'          :   name,
            'email'         :   email,
            'university'    :   university
        }
        #self.db.child('users').child(university).child(name).set(new_user_data)
        user_path = '/users/' + university + '/' + name + '/'
        self.db.child(user_path).set(new_user_data)

    def delete_user(self, name, university):
        self.db.child('users').child(university).child(name).remove()
        #user_path = '/users/' + university + '/' + name + '/'
        #db.child(user_path).remove()
    
    #add_new_user("tomer", "tomerarama@gmail.com", "technion")
    #add_new_user("itamar", "itamar@gmail.com", "technion")
    #add_new_user("nir", "nir@gmail.com", "technion")
    #add_new_user("yael", "yael@gmail.com", "technion")


    #delete_user("tomer", "tomerarama@gmail.com", "technion")

    #users = self.db.reference()
    #print(users)

    #from firebase import firebase
    #
    #databaseURL = "https://paper-share.firebaseio.com"
    #
    #firebase = firebase.FirebaseApplication(databaseURL, None)
    #data =  { 'Name': 'John Doe',
    #          'RollNo': 3,
    #          'Percentage': 70.02
    #          }
    #result = firebase.post('/python-example-f6d0b/Students/',data)
    #print(result)
