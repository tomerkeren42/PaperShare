from datetime import datetime
from flask import render_template, request
from os import environ
from collections import OrderedDict
from firebase_db import *
from login import *


app_DB = firebase_db()

@app.route('/', methods=['POST'])
def login_func():
    not_exist, not_uni, email, name, university = login(app_DB)
    if not_exist is False and not_uni is False:
        return render_template(
                'menu.html',
                year                 = datetime.now().year,
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

@app.route('/menu')
def tabs_page():
    """Renders the about page."""
    return render_template(
        'menu.html',
        title='Menu',
        year=datetime.now().year
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
    # For local enviornment:
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', 5555))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
    # for external (google app engine enviornment):
    # app.run(host='0.0.0.0', port=8080, debug=True)
