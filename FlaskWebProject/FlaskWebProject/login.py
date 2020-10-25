from flask import request, Flask
import requests as req
import re

# constants
universities_dict = {
            "campus.technion.ac.il" : "Technion",
            "mail.tau.ac.il"        : "TAU",
            "tauex.tau.ac.il"       : "TAU",
            "post.bgu.ac.il"        : "BGU",
            "post.idc.ac.il"        : "IDC"
}

# url for outside microsoft login form
url = 'https://login.microsoftonline.com/common/GetCredentialType'

app = Flask(__name__)


# check if this user already exists in the data base
# if exists - fetch its details to this session
# if doesn't exist - add to data base
def is_uni_valid(email):
    if(email.find('@') != -1):
        splitted_mail = email.split("@")
        # universities_dict holds only lowercase keys
        if splitted_mail[1].lower() in universities_dict:
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

def login(app_DB):
    not_uni   = False
    not_exist = False
    username  = ""
    university = None
    # parse email address
    email = request.form['email']
    splitted_mail = email.split("@")
    # saving data as lowercase
    name = splitted_mail[0].lower()
    university_suff = splitted_mail[1].lower()

    
    debug_mode = True
    
    if (name == "debug"):
        university = "Technion"
        return not_exist, not_uni, email, name, university, False

 
    # check if tau \ technion
    if is_uni_valid(email):
        university = universities_dict[university_suff]
        # check if the mail is real and exists
        if is_server_valid(email):
            # check if user already in database
            if app_DB.is_user_in_db(name, email, university) is False:
                # if new user - add to database
                app_DB.add_new_user(name, email, university)
        else:
            not_exist = True
    else:
        not_uni = True


    return not_exist, not_uni, email, name, university, debug_mode
