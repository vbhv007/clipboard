#!/usr/bin/python3
import sys
import requests as r

argv = sys.argv

if(argv[1] == 'add'):
    print("Enter the url for the page:")
    url = input().strip()
    while(url == ""):
        print("Enter a valid url.")
        url = input().strip()
    else:
        print("Enter Title for the page. (Enter to leave it blank):")
        title = input().strip()
        print("Enter Body text:")
        body = input().strip()
        res = r.post("http://127.0.0.1:5000/" +
                     str(url), json={'bodyData': body})
        if res.status_code == 200:
            print(res.json())
