from datetime import datetime
from flask import render_template, Flask, request, redirect
from os import environ
import requests as req
import re
######### firebase_db file #############
from pyrebase import *
######### firebase_db file #############
# import firebase_db
# from firebase_db import firebase_db

app = Flask(__name__)

# this import has to be after "app = Flask(__name__)"
# import login

######### firebase_db file #############
class firebase_db(object):
    """description of class"""

    # initiate the class
    def __init__(self):
        self.config = {
            "apiKey": "AIzaSyBJ20paxlR6HuiqNai2ecOa87V4AhFcsMo",
            "authDomain": "paper-share.firebaseapp.com",
            "databaseURL": "https://paper-share.firebaseio.com",
            "projectId": "paper-share",
            "storageBucket": "paper-share.appspot.com",
            "messagingSenderId": "716824219562",
            "appId": "1:716824219562:web:9746189bbe2c9efbe165d3",
            "measurementId": "G-QXR9SVGB3F"
        }
        self.firebase = pyrebase.initialize_app(self.config)
        self.db = self.firebase.database()

    def delete_point_in_name(self, name):
        res_name = ""
        if name.find(".") != -1:
            res_name = name.replace(".", "")
        else:
            res_name = name
        return res_name

    def add_new_user(self, name, email, university):
        new_user_data = {
            'name': name,
            'email': email,
            'university': university
        }
        name_for_db = self.delete_point_in_name(name)
        self.db.child('users').child(university).child(name_for_db).set(new_user_data)
        # user_path = '/users/' + university + '/' + name + '/'
        # self.db.child(user_path).set(new_user_data)

    def delete_user(self, name, university):
        self.db.child('users').child(university).child(name).remove()
        # user_path = '/users/' + university + '/' + name + '/'
        # db.child(user_path).remove()

    def is_user_in_db(self, name, email, university):
        name_for_db = self.delete_point_in_name(name)
        all_users_keys = self.db.child('users').child(university).shallow().get().val()
        if (all_users_keys is not None) and (name_for_db in all_users_keys):
            return True
        else:
            return False
######### firebase_db file #############

app_DB = firebase_db()

######### login.py file #############
# constants
universities_dict = {
    "campus.technion.ac.il": "Technion",
    "mail.tau.ac.il": "TAU"
}
# url for outside microsoft login form
url = 'https://login.microsoftonline.com/common/GetCredentialType'
# check if this user already exists in the data base
# if exists - fetch its details to this session
# if dosn't exist - add to data base
def is_uni_valid(email):
    if (email.find('@') != -1):
        splitted_mail = email.split("@")
        if splitted_mail[1] in universities_dict:
            return True
        else:
            return False
def is_server_valid(email):
    email = email
    body = '{"Username":"%s"}' % email
    # send to url the request
    request = req.post(url, data=body)
    # get response from port
    response = request.text
    # if mail exist in microsoft servers it'll return 0 in IfExistResult
    valid = re.search('"IfExistsResult":0', response)
    invalid = re.search('"IfExistsResult":1', response)
    if valid:
        return True
    else:
        return False
@app.route('/', methods=['POST'])
def login():
    not_uni = False
    not_exist = False
    username = None

    # parse email address
    email = request.form['email']
    splitted_mail = email.split("@")
    name = splitted_mail[0]
    university_suff = splitted_mail[1]

    # check if tau \ technion
    if is_uni_valid(email):
        # check if the mail is real and exists
        if is_server_valid(email):
            # check if user already in database
            if app_DB.is_user_in_db(name, email, universities_dict[university_suff]) is False:
                # if new user - add to database
                app_DB.add_new_user(name, email, universities_dict[university_suff])
            # go to menu page
            return render_template(
                'menu.html',
                year=datetime.now().year,
                university=universities_dict[university_suff],
                email=email,
                username=name
            )
        else:
            not_exist = True
    else:
        not_uni = True,

    return render_template(
        'index.html',
        year=datetime.now().year,
        not_uni=not_uni,
        not_exist=not_exist,
        email=email
    )
######### login.py file #############



# flask methods
@app.route('/')
@app.route('/home')
def login_page():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )


@app.route('/menu')
def tabs_page():
    """Renders the about page."""
    return render_template(
        'menu.html',
        title='Ask For Paper',
        year=datetime.now().year,
        message='Your application ask for paper page.'
    )


@app.route('/how_to')
def how_to():
    """Renders the about page."""
    return render_template(
        'how_to.html',
        title='Help',
        year=datetime.now().year,
        message='Your application help page.'
    )


@app.route('/contacts')
def contacts():
    """Renders the about page."""
    return render_template(
        'contacts.html',
        title='contacts',
        year=datetime.now().year,
        message='Your application contact page.'
    )

if __name__ == '__main__':
    #### For local enviornment:
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', 5555))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
    ## for external (google app engine enviornment):
    # app.run(host='0.0.0.0', port=8080, debug=True)