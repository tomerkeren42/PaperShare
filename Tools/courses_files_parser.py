# parse courses JSON files

import json
import sys
import os
import csv
import argparse

DEBUG = False


################################### START ARGUMENTS ###################################

parser = argparse.ArgumentParser(description='Script purpose: Upload courses csv file to Firebase Storage')

# Seed
parser.add_argument('University',metavar='Seed', type=str,
                    help='University. Must be Technion or TAU')
                    
args = parser.parse_args()

if (args.University is not None) and(args.University is not 'Technion') and (args.University is not 'TAU'):
	sys.exit("Error: Argument must be Technion or TAU")
    
if args.University is None:
    University = 'Technion'
else:
    University = args.University

################################### END ARGUMENTS ###################################

raw_files_path = "..\\..\\Courses_files\\" + University + "\\raw_js_files"
csv_file_path = "..\\..\\Courses_files\\" + University + "\\courses.csv"

# if path doesn't exist - exit script
if not os.path.exists(raw_files_path):
    sys.exit()


if University == 'Technion':

    course_numbers = []
    temp_course_info = []

    with open(csv_file_path, 'w', newline='', encoding='utf-8') as csv_file:
        # create a writer object
        csv_writer = csv.writer(csv_file)
        
        # write header for the csv file
        csv_writer.writerow(["Course Number", "Course Name", "Faculty"])
        
        # iterate over all .js files
        for file in os.listdir(raw_files_path):
            temp_file_path = raw_files_path + "\\" + file  
            
            # iterate over all lines in the current .js file
            with open(temp_file_path, encoding="utf8") as fp:
                line = fp.readline()
                while line:
                
                    if "general" in line:
                        line = fp.readline()
                        temp_faculty = line.split(":")[1].strip(' ').replace(',','').replace('"','').strip()

                        line = fp.readline()
                        temp_course_name = line.split(":")[1].strip(' ').replace(',','').replace('"','').strip()

                        line = fp.readline()
                        temp_course_number = line.split(":")[1].strip(' ').replace(',','').replace('"','').strip()
                        
                        temp_course_info = [temp_course_number, temp_course_name, temp_faculty]
                        
                        # if new course - add to CSV file and to course_numbers list
                        if temp_course_number not in course_numbers:
                            course_numbers.append(temp_course_number)
                            csv_writer.writerow(temp_course_info)
                                                
                    line = fp.readline()
                    
            # DEBUG - stop after one file parsing
            if DEBUG:
                sys.exit()

