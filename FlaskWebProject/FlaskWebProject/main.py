"""
The flask application package.
"""

from datetime import datetime
from flask import render_template, Flask, request, redirect
from os import environ
# from google.cloud import storage

# __init__ file
# the Flask APP and the Google Cloud storage initiation
app = Flask(__name__)

# CLOUD_STORAGE_BUCKET = environ['CLOUD_STORAGE_BUCKET']

# views.py file
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
    universities_dict = {
        "campus.technion.ac.il" : "Technion",
        "mail.tau.ac.il"        : "TAU"
    }
    email = request.form['email']
    if(email.find('@') != -1):
        splitted_mail = email.split("@")
        if splitted_mail[1] in universities_dict:
            #check if this user already exists in the data base
            #if exists - fetch its details to this session
            #if dosn't exist - add to data base

            #go to menu page
            return render_template(
                'menu.html',
                year                 = datetime.now().year,
                university           = universities_dict[splitted_mail[1]],
                email                = email
            )
        else:
            #print to screen an error message
            login_err_message = "הכניסה באמצעות כתובת מייל אוניברסיטאית בלבד"
            #stay in login page
            return render_template(
                'index.html',
                year                = datetime.now().year,
                login_err_message   = login_err_message,
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
    
    ### For local enviornment:
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', 5555))  
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)


    ### for external (google app engine enviornment):
    # app.run(host='0.0.0.0', port=8080, debug=True)
