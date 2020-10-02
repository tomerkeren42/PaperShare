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
import login



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
