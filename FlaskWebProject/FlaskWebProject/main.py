"""
The flask application package.
"""

from datetime import datetime
from flask import render_template, Flask, request, redirect
# from FlaskWebProject import app
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

@app.route('/give')
def give():
    """Renders the contact page."""
    return render_template(
        'give.html',
        title='Give Paper',
        year=datetime.now().year,
        message='Your application give paper page.'
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
    #HOST = environ.get('SERVER_HOST', 'localhost')
    #try:
    #    PORT = int(environ.get('SERVER_PORT', 5555))  
    #except ValueError:
    #    PORT = 5555
    #print("HOST is: ", HOST, " and PORT is: ", PORT)
    #app.run(HOST, PORT)
    #app.run(host=None, port=None)
    #app.run(host='127.0.0.1', port=5555)
    app.run(host='0.0.0.0', port=8080, debug=True)

    