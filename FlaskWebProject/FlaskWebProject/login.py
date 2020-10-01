from flask import render_template, Flask, request, redirect, Blueprint
from datetime import datetime
import requests as req
import re
from __main__ import app, app_DB


# constants
universities_dict = {
            "campus.technion.ac.il" : "Technion",
            "mail.tau.ac.il"        : "TAU"
}

# url for outside microsoft login form
url = 'https://login.microsoftonline.com/common/GetCredentialType'


#check if this user already exists in the data base
#if exists - fetch its details to this session
#if dosn't exist - add to data base
def is_uni_valid(email):
    if(email.find('@') != -1):
        splitted_mail = email.split("@")
        if splitted_mail[1] in universities_dict:
            return True
        else:
            return False

def is_server_valid(email):
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

@app.route('/', methods=['POST'])
def login():
    not_uni   = False
    not_exist = False
    username  = None

    # parse email address
    email = request.form['email']
    splitted_mail = email.split("@")
    name = splitted_mail[0]
    university_suff = splitted_mail[1]

    # check if tau \ technion
    if is_uni_valid(email):
        # check if already exist
        # if email in data_base:
        # go to menu page
        # else, check if new use is valid:
        if is_server_valid(email):
            app_DB.add_new_user(name, email, universities_dict[university_suff])
            # add to data base, go to menu page
            return render_template(            
                'menu.html',
                year                 = datetime.now().year,
                university           = universities_dict[university_suff],
                email                = email,
                username             = name
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
