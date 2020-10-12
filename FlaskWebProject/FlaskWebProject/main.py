from datetime import datetime
from flask import render_template, request
from os import environ
from collections import OrderedDict
from firebase_db import *
from login import *
from Technion_courses_dict import Technion_courses_list
from TAU_courses_dict import TAU_courses_list

app_DB = firebase_db()

universities_courses = {
    'Technion':Technion_courses_list,
    'TAU': TAU_courses_list
    }

courses_names_list = []



@app.route('/', methods=['POST'])
def login_func():
    not_exist, not_uni, email, name, university = login(app_DB)
    if not_exist is False and not_uni is False:
        courses_list = universities_courses[university]
        faculties_list = [d['faculty_name'] for d in courses_list if 'faculty_name' in d]
        unique_ordered_faculties_list = list(OrderedDict.fromkeys(faculties_list))
        return render_template(
                'menu.html',
                year                 = datetime.now().year,
                university           = university,
                email                = email,
                username             = name,
                faculties_list       = unique_ordered_faculties_list,  ### Tomer Arama: need to add option for other lists once we'll have TAU courses' list
                courses_names_list   = courses_names_list
                )
    else:
        return render_template(
                    'index.html',
                    year                = datetime.now().year,
                    not_uni             = not_uni,
                    not_exist           = not_exist,
                    email               = email
                )

@app.route('/menu', methods=['POST'])
def courses_dropdown():
    chosen_faculty = request.form['faculty']
    print(chosen_faculty)
    #if chosen_faculty=="":
    #    faculties_list = [d['faculty_name'] for d in Technion_courses_list if 'faculty_name' in d]
    #    unique_ordered_faculties_list = list(OrderedDict.fromkeys(faculties_list))
    #    return render_template(
    #            'menu.html',
    #            year                 = datetime.now().year,
    #            university           = university,
    #            email                = email,
    #            username             = name,
    #            faculties_list       = unique_ordered_faculties_list  ### Tomer Arama: need to add option for other lists once we'll have TAU courses' list
    #            )
    #else:
    #    colours = ['Red', 'Blue', 'Black', 'Orange']
    #    return render_template(
    #        'menu.html',
    #        year                 = datetime.now().year,
    #        university           = university,
    #        email                = email,
    #        username             = name,
    #        courses_list       = unique_ordered_faculties_list  ### Tomer Arama: need to add option for other lists once we'll have TAU courses' list
    #        )

# page loading
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