
import PrelimInfo

import pyrebase
from firebase import firebase
from getpass import getpass
import time
import re
from firebase_admin import db
import requests
from requests.packages import urllib3
import tkinter.messagebox as tm
    
# creates initial user financial profile -> store data on FireBase
def initial_info(firebase,email,salary,total_tax,take_home_monthly,prov_code):

	# replace '.' with dot, so firebase doesnt throw error 
	
	email = email.replace(".",'dot')

	db = firebase.database()
	data = {"Salary": float(salary),
			"Prov_code": prov_code,
			"Total_Tax": float(total_tax),
			"Take_home_income": take_home_monthly,
			"Expenses":
				{
					"Rent": PrelimInfo.expenses['rent'],
					"Internet": PrelimInfo.expenses['internet'],
					"Phone": PrelimInfo.expenses['phone'],
					"Groceries": PrelimInfo.expenses['groceries'],
					"Commute": PrelimInfo.expenses['commute'],
					"Utility": PrelimInfo.expenses['utility'],
					"Entertainment": PrelimInfo.expenses['entertainment'],
					"Hobbies": PrelimInfo.expenses['hobbies']
				}
			}

	db.child("Users").child(email).child("Financial Profile").set(data)

	return

# creates initial user financial profile -> store data on FireBase
def pull_data(firebase,auth,email):

	## NEED TO PULL DATA HERE
	email = email.replace(".",'dot')
	PrelimInfo.expenses = firebase.database().child("Users").child(email).child("Financial Profile").child("Expenses").get().val()
	PrelimInfo.real_time = firebase.database().child("Users").child(email).child("Financial Profile").child("Real-time Budget").get().val()
	return

# Adds users to firebase realtime database
def add_user_to_db(firebase, email, name):
	
	# replace '.' with dot, so firebase doesnt throw error 
	replace = "dot"
	#email = replace.join(email.rsplit('.', 1))
	
	email = email.replace(".",'dot')

	db = firebase.database()
	data = {"Name": name,
			"Phone": '123-456-7890'}
	
	# add User to the data base under 'Users'
	db.child("Users").child(email).set(data)

	#print("Returning from ")

	return

# reset account password
def reset_pass(fb,auth,email):
    
	try:
		auth.send_password_reset_email(email)
		return True
        
	except Exception as e:
		# if email is of an invalid format 
		invalid_email_regex = re.compile(r'\bINVALID_EMAIL\b')
		if(len(re.findall(invalid_email_regex,e.strerror))!=0):
			return False

# user_login
def login(fb, auth,email,password):
	try:

		# login with email and password
		auth.sign_in_with_email_and_password(email,password)
		return True

	except Exception as e:

		# check for valid email format
		email_not_found_regex = re.compile(r'\bINVALID_EMAI\b')
		if(len(re.findall(email_not_found_regex,e.strerror))!=0):
			return False

		# check for incorrect password
		password_incorrect_regex = re.compile(r'\bINVALID_PASSWORD\b')
		if(len(re.findall(password_incorrect_regex,e.strerror))!=0):
			return False

# verify user account
def verify_email(auth,user):
	
	result = auth.get_account_info(user['idToken']).get('users')
	# check if user is verified
	email_verified = result[0].get('emailVerified')

	# if not verified, send verification email
	if (email_verified == False):
		auth.send_email_verification(user['idToken'])
		tm.showinfo("Waiting for verification!", "Check the email address provided for the verification email!")

	# wait until user verfies email
	while(email_verified == False):
		result = auth.get_account_info(user['idToken']).get('users')
		email_verified = result[0].get('emailVerified')

	return


# new user sign up
def signup(fb, auth,email,password,name):

	try:
		# create user with email and password
		user = auth.create_user_with_email_and_password(email, password)
		# send a verification email to user to verify account
		verify_email(auth,user)
        # after verification, add user to cloud database
		add_user_to_db(fb,email,name)
		tm.showinfo("Verified!", "Welcome to BAM!")

		return True

		
	except Exception as e:

		# if email already in use, ask to enter email again
		email_exists_regex = re.compile(r'\bEMAIL_EXISTS\b')
		if(len(re.findall(email_exists_regex,e.strerror))!=0):
			tm.showerror("ERROR!", "Email exists!")
			return False	
		# if email is of an invalid format 
		invalid_email_regex = re.compile(r'\bINVALID_EMAIL\b')
		if(len(re.findall(invalid_email_regex,e.strerror))!=0):
			tm.showerror("ERROR!", "Invalid email!")
			return False
#
## get user name from user
#def get_username():
#
#	# username rejex
#	r = re.compile("^[a-zA-Z]*$")
#	
#	name = input("Please enter your name: \n")
#	
#	# ensure user name matches requirements
#	while  not r.match(name):
#		name = input("You name cannot contain any special characters or numbers, please enter your name again: \n")
#
#	return name
#
## get pass from user
#def get_password():
#
#	# password regex 
#	pwp = re.compile("(?=.*?[0-9])(?=.*?[A-Za-z]).+")
#	
#	# get pass from user
#	password = getpass("Enter your password (At least one letter, one number -- no space or special characters): \n")
#
#	# ensure pass is meeting requirements
#	while not pwp.match(password):
#		password = getpass("Password restrictions not followed. Please enter your password again: \n")
#
#	return password