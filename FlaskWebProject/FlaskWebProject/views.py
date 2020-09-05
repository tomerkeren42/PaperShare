"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template
from FlaskWebProject import app
from flask_mysqldb import MySQL

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'epiz_26668577_PaperShare'

mysql = MySQL(app)

@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'login.html',
        title='Home Page',
        year=datetime.now().year,
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
