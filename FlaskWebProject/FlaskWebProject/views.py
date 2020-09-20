"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template, request
from FlaskWebProject import app
from flask_mysqldb import MySQL

app.config['MYSQL_HOST'] = 'sql303.epizy.com'
app.config['MYSQL_USER'] = 'epiz_26668577'
app.config['MYSQL_PASSWORD'] = 'jspISfH6zLMo'
app.config['MYSQL_DB'] = 'epiz_26668577_PaperShare'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'


mysql = MySQL(app)

#mysql = MySQL()
#mysql.init_app(app)

@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'login.html',
        year=datetime.now().year,
    )

@app.route('/', methods=['POST'])
def login():
    tecnion_suff = "campus.technion.ac.il"
    tau_suff = "mail.tau.ac.il"
    email = request.form['email']
    if(email.find('@') != -1):
        splitted_mail = email.split("@")
        if(splitted_mail[1] == tecnion_suff or splitted_mail[1] == tau_suff):
            #check if this user already exists in the data base
            #if exists - fetch its details to this session
            #if dosn't exist - add to data base

            #go to menu page
            return render_template(
                'menu.html',
                year=datetime.now().year,
            )
        else:
            #print to screen an error message
            login_err_message = "Invalid Email address"
            #stay in login page
            return render_template(
                'login.html',
                year=datetime.now().year,
                login_err_message=login_err_message,
                email = email
            )

@app.route('/menu')
def menu():
    """Renders the about page."""
    return render_template(
        'menu.html',
        year=datetime.now().year,
    )

@app.route('/how_to')
def help():
    """Renders the about page."""
    return render_template(
        'how_to.html',
        year=datetime.now().year,
    )
