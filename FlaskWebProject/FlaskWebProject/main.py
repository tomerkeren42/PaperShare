from datetime import datetime
from flask import render_template, Flask, request, redirect
from os import environ
import requests as req
import re

# leaving this python code because it works perfectly well on local hosts, but never return true when verify a remote host. add to requirments if want to try again.
# from validate_email import validate_email
# from PyCloudNS import *        
#     if validate_email(email, verify=True):
#     else:
#         not_exist   = True,

# the Flask APP
app = Flask(__name__)

# url for outside microsoft login form
url = 'https://login.microsoftonline.com/common/GetCredentialType'

# constants
universities_dict = {
        "campus.technion.ac.il" : "Technion",
        "mail.tau.ac.il"        : "TAU"
    }

def valid(email):
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


# flask methods
@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.route('/', methods=['POST'])
def login():
    email = request.form['email']
    splitted_mail = email.split("@")
    not_uni   = False
    not_exist = False
    # check if tau \ tech
    if splitted_mail[1] in universities_dict:
        # check if already exist
        # if email in data_base:
        # go to menu page
        # else, check if new use is valid:
        if valid(email):
                # add to data base, go to menu page
            return render_template(            
                'menu.html',
                year                 = datetime.now().year,
                university           = universities_dict[splitted_mail[1]],
                email                = email
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

@app.route('/menu')
def ask():
    """Renders the about page."""
    return render_template(
        'menu.html',
        title='Ask For Paper',
        year=datetime.now().year,
        message='Your application ask for paper page.'
    )

@app.route('/how_to')
def help():
    """Renders the about page."""
    return render_template( 
        'how_to.html',
        title='Help',
        year=datetime.now().year,
        message='Your application help page.'
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

