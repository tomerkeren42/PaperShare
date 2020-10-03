from datetime import datetime
from flask import render_template, Flask, request, redirect
from os import environ
import requests as req
import re
from firebase_db import firebase_db

# leaving this python code because it works perfectly well on local hosts, but never return true when verify a remote host. add to requirments if want to try again.
# from validate_email import validate_email
# from PyCloudNS import *        
#     if validate_email(email, verify=True):
#     else:
#         not_exist   = True,

# the Flask APP
app = Flask(__name__)
app_DB = firebase_db()


#this import has to be after "app = Flask(__name__)"
# import login

# constants
universities_dict = {
            "campus.technion.ac.il" : "Technion",
            "mail.tau.ac.il"        : "TAU"
}

# url for outside microsoft login form
url = 'https://login.microsoftonline.com/common/GetCredentialType'


#check if this user already exists in the data base
#if exists - fetch its details to this session
#if dosn't exist - add to data base
def is_uni_valid(email):
    if(email.find('@') != -1):
        splitted_mail = email.split("@")
        if splitted_mail[1] in universities_dict:
            return True
        else:
            return False

def is_server_valid(email):
    email = email
    body = '{"Username":"%s"}' % email
    #send to url the request
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
    not_uni   = False
    not_exist = False
    username  = None

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
                year                 = datetime.now().year,
                university           = universities_dict[university_suff],
                email                = email,
                username             = name
                )
        else:
            not_exist=True
    else:
        not_uni= True,

    return render_template(
                'index.html',
                year                = datetime.now().year,
                not_uni             = not_uni,
                not_exist           = not_exist,
                email               = email
            )


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

# runserver file

if __name__ == '__main__':
    
    #### For local enviornment:
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', 5555))  
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)


    ## for external (google app engine enviornment):
    
    #app.run(host='0.0.0.0', port=8080, debug=True)
