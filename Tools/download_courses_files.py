# download all Technion course's JSON files from Michael Maltsev GIT 

import re
import urllib.request as urllib2
import os
import urllib3, shutil

http = urllib3.PoolManager()

##################################################################################################################
############################# create a list of all courses' .js files' links #####################################
##################################################################################################################

courses_page_url = "https://github.com/michael-maltsev/cheese-fork/tree/gh-pages/courses"

html = urllib2.urlopen(courses_page_url)
text = html.read()
plaintext = text.decode('utf8')
all_links = re.findall("href=[\"\'](.*?)[\"\']", plaintext)

js_links = []

for link in all_links:
    if ".js" in link:
        if (".min.js" not in link) and (".json" not in link):
            temp_link = link.replace("blob/","")
            js_links.append("https://raw.githubusercontent.com" + temp_link)
 

for l in js_links:
    print(l)


##################################################################################################################
############################### download and save all .js files in a local directory #############################
##################################################################################################################


files_path = "..\\..\\Courses_files\\Technion"

# create the path if needed
if not os.path.exists(files_path):
    os.makedirs(files_path)


for url in js_links:
    splitted_url = url.split("/")
    name_idx = len(splitted_url)
    file_name = splitted_url[name_idx-1]
    
    file_full_name = files_path + "\\" + file_name
    
    with http.request('GET', url, preload_content=False) as r, open(file_full_name, 'wb') as out_file:       
        shutil.copyfileobj(r, out_file)
