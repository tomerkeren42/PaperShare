from datetime import datetime
from flask import render_template, Flask, request, redirect
from os import environ
from validate_email import validate_email
from PyCloudNS import *

# the Flask APP
app = Flask(__name__)

# constants
universities_dict = {
        "campus.technion.ac.il" : "Technion",
        "mail.tau.ac.il"        : "TAU"
    }

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
    if splitted_mail[1] in universities_dict:
        if validate_email(email, verify=True):
            #check if this user already exists in the data base
            #if exists - fetch its details to this session
            #if doesn't exist - add to data base
            return render_template(            #go to menu page
                'menu.html',
                year                 = datetime.now().year,
                university           = universities_dict[splitted_mail[1]],
                email                = email
                )
        else:
            not_exist   = True,
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
    
    ### For local enviornment:
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', 5555))  
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)


    ### for external (google app engine enviornment):
    #app.run(host='0.0.0.0', port=8080, debug=True)
