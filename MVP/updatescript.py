import pyrebase
from firebase import firebase
from getpass import getpass
import time
import re
from firebase_admin import db
import requests
from requests.packages import urllib3


# config for Firebase database * DO NOT CHANGE *
config = {
    "apiKey": "AIzaSyC81RkBYIg9KNhBCTFpVKNKQEuMRjbTSpA",
    "authDomain": "testproj-d2cd8.firebaseapp.com",
    "databaseURL": "https://testproj-d2cd8.firebaseio.com",
    "projectId": "testproj-d2cd8",
    "storageBucket": "testproj-d2cd8.appspot.com",
    "messagingSenderId": "104581657479",
    "appId": "1:104581657479:web:c89d3b3451f99617ef9922",
    "measurementId": "G-1FW11P39ET"
}

# initalize connection to firebase
fb = pyrebase.initialize_app(config)
auth = pyrebase.initialize_app(config).auth()


email = "bamtester13@gmail.com"
email = email.replace(".",'dot')
db = fb.database()

data = {"Commute": 10,
		"Entertainment": 50,
		"Groceries": 100,
		"Hobbies": 10,
		"Internet": 100,
		"Phone": 70,
		"Rent": 1200,
		"Utility": 50}

db.child("Users").child(email).child("Financial Profile").child("Real-time Budget").update(data)

# data = {"Commute": 50,
#         "Entertainment": 70,
#         "Groceries": 1000,
#         "Hobbies": 20,
#         "Internet": 100,
#         "Phone": 70,
#         "Rent": 1200,
#         "Utility": 50}

# db.child("Users").child(email).child("Financial Profile").child("Real-time Budget").update(data)

# data = {"Commute": 90,
#         "Entertainment": 120,
#         "Groceries": 200,
#         "Hobbies": 50,
#         "Internet": 100,
#         "Phone": 70,
#         "Rent": 1200,
#         "Utility": 50}

# db.child("Users").child(email).child("Financial Profile").child("Real-time Budget").update(data)

















