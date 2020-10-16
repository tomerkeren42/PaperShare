"""
create_courses_lists

This script does:
For Technion:
1. Download all CheeseFork's courses and faculties .js files from Michael Maltzev's GitHub
2. Parse all .js files into a Python container (list of dictionaries)
3. Use the Python container to create a .js file with two vars:
    a. List of faculties' names
    b. List of lists with all the courses' names

"""

import re
import urllib.request as urllib2
import os
import urllib3, shutil
import argparse
import sys
from collections import OrderedDict

################################### START ARGUMENTS ###################################

parser = argparse.ArgumentParser(description='Script purpose: Upload courses csv file to Firebase Storage')

parser.add_argument('--University', type=str, default='Technion', required=False,
                    choices=['Technion', 'TAU'], help='University. Must be Technion or TAU')
                    
args = parser.parse_args()

University = args.University

################################### END ARGUMENTS ###################################

##################################################################################################################
######################################## Download all course's JSON files ########################################
##################################################################################################################

if University == 'Technion':
    
    print("\n\nStart downloading all courses' files for {}...\n\n".format(University))

    raw_files_path = "..\\..\\Courses_files\\" + University + "\\raw_js_files"
    
    http = urllib3.PoolManager()

    ############################# create a list of all courses' .js files' links #####################################

    courses_page_url = "https://github.com/michael-maltsev/cheese-fork/tree/gh-pages/courses"
    raw_link_pref = "https://raw.githubusercontent.com"

    html = urllib2.urlopen(courses_page_url)
    text = html.read()
    plaintext = text.decode('utf8')
    all_links = re.findall("href=[\"\'](.*?)[\"\']", plaintext)

    js_links = []

    for link in all_links:
        if ".js" in link:
            if (".min.js" not in link) and (".json" not in link):
                temp_link = link.replace("blob/","")
                js_links.append(raw_link_pref + temp_link)

    ############################### download and save all .js files in a local directory #############################

    # create the path if needed
    if not os.path.exists(raw_files_path):
        os.makedirs(raw_files_path)

    for url in js_links:
        splitted_url = url.split("/")
        name_idx = len(splitted_url)
        file_name = splitted_url[name_idx-1]
        
        file_full_name = raw_files_path + "\\" + file_name
        
        with http.request('GET', url, preload_content=False) as r, open(file_full_name, 'wb') as out_file:       
            shutil.copyfileobj(r, out_file)
        
        print("{} - Downloaded Successfully".format(file_full_name))

    print("\n\nFinish downloading all courses' files for {}!\n\n".format(University))

##################################################################################################################
############################################### Parse JSON files #################################################
##################################################################################################################

print("Start parsing all courses' files for {}...\n\n".format(University))

if University == 'Technion':
    
    ######################## read from courses' .js files, parse, and write to a container ###########################
    
    course_numbers = []
    courses = []
    
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
                                        
                    temp_course_full_name = temp_course_number + " - " + temp_course_name
                    temp_course_full_name = temp_course_full_name.replace("'", "").replace("\\", "")

                    # if new course - add to courses and to course_numbers list
                    if temp_course_number in course_numbers:
                        continue
                    else:
                        course_numbers.append(temp_course_number)
                        temp_course_dict = {
                            'course_name':temp_course_full_name,
                            'faculty_name':temp_faculty
                        }
                        courses.append(temp_course_dict)
                    
                                            
                line = fp.readline()
                

elif University == 'TAU':
    ######################## read from courses' .txt files, parse, and write to a container ###########################
    
    raw_files_path = "raw\\TAU_RawCourses.txt"
    
    course_numbers = []
    courses = []

    # iterate over all lines in the .txt file
    with open(raw_files_path, encoding="utf8") as fp:
        line = fp.readline()
        for line in fp:

            if "קב':" in line:
                temp_course_name = line.split('\t')[1].strip('\n')
                #temp_course_name = str(line.split(":")[1].split(' ')[1:]).split('\t')[0].strip("'").replace(',','').strip(""\"")
                temp_course_number = line.split(" ")[0].replace('-','')

                line = fp.readline()
                temp_faculty = line.split("/")[0]
                
                temp_course_full_name = temp_course_number + " - " + temp_course_name
                temp_course_full_name = temp_course_full_name.replace("'", "").replace("\\", "")

                # if new course - add to courses and to course_numbers list
                if temp_course_number in course_numbers:
                    continue
                else:
                    course_numbers.append(temp_course_number)
                    temp_course_dict = {
                        'course_name':temp_course_full_name,
                        'faculty_name':temp_faculty
                    }
                    courses.append(temp_course_dict)

            line = fp.readline()
    
                
print("Finish parsing all courses' files for {}!\n\n".format(University))

##################################################################################################################
####################################### create courses' JavaScript file ##########################################
##################################################################################################################

print("Start writing courses' of {} to JavaScript file...\n\n".format(University))

output_js_file_path = "..\\FlaskWebProject\\FlaskWebProject\\static\\scripts\\" + University + "_courses_lists.js"

###################################### create JavaScript faculties list ##########################################

faculties_list = [d['faculty_name'] for d in courses if 'faculty_name' in d]
unique_ordered_faculties_list = list(OrderedDict.fromkeys(faculties_list))

if '' in unique_ordered_faculties_list:
    if University == 'Technion':
        unique_ordered_faculties_list.remove('')
    elif University == 'TAU':
        unique_ordered_faculties_list.remove('') ################## Arama: NEED TO CHANGE IT TO "ENGLISH COURSES" ??? ##################

faculties_num = len(unique_ordered_faculties_list)

with open(output_js_file_path, 'w', newline='', encoding='utf-8') as output_file:
    
    output_file.write("// " + University + "'s courses:\n\n")
    
    ### write the faculties array ###

    output_file.write("var faculties_list = [\n")
    i = 0
    for curr_faculty_name in unique_ordered_faculties_list:
        i += 1
        if i == faculties_num:
            curr_faculty_line = '\t"{}"\n];\n\n'.format(curr_faculty_name)
        else:
            curr_faculty_line = '\t"{}",\n'.format(curr_faculty_name)
        output_file.write(curr_faculty_line)    

    ### write the courses array of arrays ###
    
    output_file.write("var courses_lists = new Array({})\n".format(faculties_num))
    
    for curr_faculty_name in unique_ordered_faculties_list:
        curr_courses_list = [d['course_name'] for d in courses if d['faculty_name'] == curr_faculty_name]
        curr_courses_num = len(curr_courses_list)
        j = 0
        curr_courses_line = 'courses_lists["{}"] = \n[\n'.format(curr_faculty_name)
        for course in curr_courses_list:
            j += 1
            curr_course_name = '\t\t"' + course + '"'
            if j == curr_courses_num:
                curr_course_name =  curr_course_name + "\n];\n"
            else:
                curr_course_name = curr_course_name + ",\n"
            curr_courses_line += curr_course_name
        output_file.write(curr_courses_line)
            
print("Finish writing courses' of {} to JavaScript file!\n\n".format(University))

sys.exit()