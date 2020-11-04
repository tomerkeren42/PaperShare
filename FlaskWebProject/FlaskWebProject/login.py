from flask import request, Flask
import requests as req
import re
from smtplib import SMTP

# constants
universities_dict = {
            "campus.technion.ac.il" : "Technion",
            "technion.ac.il"        : "Technion",
            "mail.tau.ac.il"        : "TAU",
            "tauex.tau.ac.il"       : "TAU",
            "mail.huji.ac.il"       : "HUJI",
            "post.bgu.ac.il"        : "BGU",
            "post.idc.ac.il"        : "IDC"
}

# url for outside microsoft login form
microsoft_url = "https://login.microsoftonline.com/common/GetCredentialType"
isitrealmail_email_api = "https://isitarealemail.com/api/email/validate"
# mailboxlayer_url = "http://apilayer.net/api/check?access_key=21e9a428f544fdf81eed31c991d4e1c9"  

app = Flask(__name__)


def is_uni_valid(email):
    if(email.find('@') != -1):
        splitted_mail = email.split("@")
        # universities_dict holds only lowercase keys
        if splitted_mail[1].lower() in universities_dict:
            return True
        else:
            return False

def microsoft_email_check(email):
     body = '{"Username":"%s"}' % email
     request = req.post(microsoft_url, data=body)
     response = request.text
     # write to a file for debug
     #with open('microsoft_out.txt', 'a') as f:
     #   print("response is: ", response, file=f)
     #   print("request is:", request, "\n\n",  file=f)
     is_exist = response.split('"IfExistsResult":')
     if is_exist[1][0] == "0":
         return True
     else:
         return False

## use for huji accounts
def isitrealmail_email_check(email):
     response = req.get(isitrealmail_email_api, params = {'email': email})
     status = response.json()['status']
     if status == "valid":
         return True
     else:
         return False

# can't validate TAU!
# def TAU_email_check(email):
    # print ("microsoft is: ", microsoft_email_check(email))
    #print ("isitrealmail is: ", isitrealmail_email_check(email))
    # response = req.get('https://api.mailgun.net/v4/address/validate',
    #    auth=("api", '9b1bf5d3-2cdec14d'),
    #    params={"address": email})
    #print("mailgun:", response )
    #response = req.post(
    #    "https://api.mailgun.net/v4/address/validate",
    #    auth=("api", "9b1bf5d3-2cdec14d"),
    #    data={"address": email})
    #print("mailgun:", response )


def is_server_valid(email, university):
    if university == "HUJI":
        return isitrealmail_email_check(email)
    else :
        return microsoft_email_check(email)

    #elif university == "TAU":
    #    return True
        
def login(app_DB):
    not_uni   = False
    not_exist = False
    username  = ""
    university = None
    # parse email address
    email = request.form['email'].lower()
    splitted_mail = email.split("@")
    # saving data as lowercase
    name = delete_point_in_name(splitted_mail[0].lower())
    university_suff = splitted_mail[1].lower()

    # debug mode - close the site for visitors
    debug_mode = False
    if (name == "debug"):
        app_DB.add_new_user(name, email, "Technion")
        return not_exist, not_uni, email, name, "Technion", False
 # check valid uni + in DB + valid server
    if is_uni_valid(email):
        university = universities_dict[university_suff]
        if app_DB.is_user_in_db(name, email, university) is False:
            if is_server_valid(email, university):
                app_DB.add_new_user(name, email, university)
            else:
                not_exist = True
    else:
        not_uni = True

    return not_exist, not_uni, email, name, university, debug_mode

def delete_point_in_name(name):
    res_name = ""
    if name.find(".") != -1:
        res_name = name.replace(".","")
    else:
        res_name = name
    return res_name