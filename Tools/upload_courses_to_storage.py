# upload courses.csv file to out Firebase storage

import pyrebase
import argparse

################################### START ARGUMENTS ###################################

parser = argparse.ArgumentParser(description='Script purpose: Upload courses csv file to Firebase Storage')

# Seed
parser.add_argument('--University', type=str, default='Technion',
                    choices=['Technion', 'TAU'], help='University. Must be Technion or TAU')
                    
args = parser.parse_args()

University = args.University

################################### END ARGUMENTS ###################################

csv_file_path = "..\\..\\Courses_files\\" + University + "\\courses.csv"
storage_path = "courses_data/" + University + "/courses.csv"

config = {
            "apiKey"                : "AIzaSyBJ20paxlR6HuiqNai2ecOa87V4AhFcsMo",
            "authDomain"            : "paper-share.firebaseapp.com",
            "databaseURL"           : "https://paper-share.firebaseio.com",
            "projectId"             : "paper-share",
            "storageBucket"         : "paper-share.appspot.com",
            "messagingSenderId"     : "716824219562",
            "appId"                 : "1:716824219562:web:9746189bbe2c9efbe165d3",
            "measurementId"         : "G-QXR9SVGB3F"
        }

firebase = pyrebase.initialize_app(config)

storage = firebase.storage()

storage.child().put(csv_file_path)