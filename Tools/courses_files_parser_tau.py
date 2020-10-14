# parse courses JSON files
import sys
import os
import csv
import argparse

DEBUG = True

def write_course_to_csv_file(course_info_array, course_numbers, csv_writer):
    new_course_number = course_info_array[0]
    # if new course - add to CSV file and to course_numbers list
    if new_course_number in course_numbers:
        return
    else:
        course_numbers.append(new_course_number)
        csv_writer.writerow(course_info_array)


def write_course_to_py_file(course_info_array, course_numbers, output_file):
    new_course_number = course_info_array[0]
    new_course_name = course_info_array[1]
    course_full_name = new_course_number + " - " + new_course_name
    course_full_name = course_full_name.replace("'", "").replace("\\", "")
    new_course_faculty = course_info_array[2]
    # if new course - add to CSV file and to course_numbers list
    if new_course_number in course_numbers:
        return
    else:
        course_numbers.append(new_course_number)
        output_file.write("\t{\n")
        output_file.write("\t\t'course_name':'" + course_full_name + "',\n")
        output_file.write("\t\t'faculty_name':'" + new_course_faculty + "'\n")
        output_file.write("\t},\n")


################################### START ARGUMENTS ###################################

parser = argparse.ArgumentParser(description='Script purpose: Upload courses csv file to Firebase Storage')

# Seed
parser.add_argument('--University', type=str, default='TAU',
                    choices=['Technion', 'TAU'], help='University. Must be Technion or TAU')

parser.add_argument('--FileType', type=str, default='py',
                    choices=['py', 'csv'], help='FileType. Must be csv or py')

args = parser.parse_args()

University = args.University
FileType = args.FileType
################################### END ARGUMENTS ###################################

raw_files_path = "raw"
csv_file_path = "..\\..\\Courses_files\\" + University + "\\courses.csv"
py_file_path = "..\\FlaskWebProject\\FlaskWebProject\\" + University + "_courses_dict.py"

# if path doesn't exist - exit script
if not os.path.exists(raw_files_path):
    sys.exit()


if FileType == 'py':
    output_file_path = py_file_path
else:
    output_file_path = csv_file_path

if University == 'TAU':

    ##################################################################################################################
    ############################ read from courses' .js files, parse, and write to a file ############################
    ##################################################################################################################

    course_numbers = []
    temp_course_info = []

    with open(output_file_path, 'w', newline='', encoding='utf-8') as output_file:

        if FileType == 'py':
            output_file.write("# " + University + "'s courses:\n\n")
            output_file.write(University + "_courses_list = [\n")
        else:
            # create a writer object
            csv_writer = csv.writer(output_file)
            # write header for the csv file
            csv_writer.writerow(["Course Number", "Course Name", "Faculty"])

        # iterate over all .js files
        for file in os.listdir(raw_files_path):
            temp_file_path = 'raw/TAU_RawCourses.txt'

            # iterate over all lines in the current .js file
            with open(temp_file_path, encoding="utf8") as fp:
                line = fp.readline()
                for line in fp:

                    if "קב':" in line:
                        temp_course_name = line.split('\t')[1].strip('\n')
                        #temp_course_name = str(line.split(":")[1].split(' ')[1:]).split('\t')[0].strip("'").replace(',','').strip(""\"")
                        temp_course_number = line.split(" ")[0].replace('-','')

                        line = fp.readline()
                        temp_faculty = line.split("/")[0]

                        temp_course_info = [temp_course_number, temp_course_name, temp_faculty]

                        if FileType == 'py':
                            write_course_to_py_file(temp_course_info, course_numbers, output_file)
                        else:
                            write_course_to_csv_file(temp_course_info, course_numbers, csv_writer)

                    line = fp.readline()

            # DEBUG - stop after one file parsing
            if DEBUG:
                sys.exit()

        if FileType == 'py':
            output_file.write("]\n")
