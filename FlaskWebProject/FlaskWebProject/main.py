from datetime import datetime
from flask import render_template, request
from os import environ
from collections import OrderedDict
from firebase_db import *
from login import *

app_DB = firebase_db()

@app.route('/', methods=['POST'])
def login_func():
    date = datetime.now().date()
    #Now get rid of seconds and microseconds component:
    not_exist, not_uni, email, name, university, debug_mode = login(app_DB)
    if debug_mode:
        return render_template(
               'index.html',
               year                = datetime.now().year,
               not_uni             = not_uni,
               not_exist           = not_exist,
               debug_mode          = debug_mode,
               email               = email,
               username            = name
               )
    if not_exist is False and not_uni is False:
        return render_template(
                'menu.html',
                year                 = datetime.now().year,
                date                 = date,
                university           = university,
                email                = email,
                username             = name,
                title                = 'Menu'
                )
    else:
        return render_template(
                    'index.html',
                    year                = datetime.now().year,
                    not_uni             = not_uni,
                    not_exist           = not_exist,
                    email               = email
                )

# page loading
@app.route('/')
@app.route('/home')
def login_page():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year
    )

@app.route('/menu', methods=['POST'])
def tabs_page():
    date = datetime.now().date()
    #Now get rid of seconds and microseconds component:
    """Renders the about page."""
    return render_template(
        'menu.html',
        title   = 'Menu',
        date    = date,
        year    = datetime.now().year
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
    ### For local enviornment:
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', 5555))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
    
    ### for external (google app engine enviornment):
    # app.run(host='0.0.0.0', port=8080, debug=True)
