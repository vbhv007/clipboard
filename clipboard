#!/usr/bin/python3
import sys
import requests as r


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


argv = sys.argv
print(bcolors.BOLD + "Enter the url for the page:" + bcolors.ENDC)
url = input().strip()
while(url == ""):
    print(bcolors.BOLD + "Enter a valid url." + bcolors.ENDC)
    url = input().strip()

if(argv[1] == 'add'):
    print(bcolors.BOLD +
          "Enter Title for the page. (Enter to leave it blank):" + bcolors.ENDC)
    title = input().strip()
    print(bcolors.BOLD + "Enter Body text:" + bcolors.ENDC)
    body = input().strip()
    res = r.post("http://clipboard-api.herokuapp.com/public/" +
                 str(url), json={'pageBody': body, 'pageTitle': title})
    if res.status_code == 200:
        print(res.json())

elif(argv[1] == 'get'):
    res = r.get("http://clipboard-api.herokuapp.com/public/" + str(url))
    sCode = res.status_code
    res = res.json()['results']
    if sCode == 200 and res['Success']:
        title = res['pageTitle']
        body = res['pageBody']
        print(bcolors.OKBLUE + "Title: " + bcolors.ENDC,
              bcolors.OKGREEN + title + bcolors.ENDC)
        print()
        print(bcolors.OKBLUE + "Body: " + bcolors.ENDC,
              bcolors.OKGREEN + body + bcolors.ENDC)
