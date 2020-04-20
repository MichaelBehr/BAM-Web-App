# -*- coding: utf-8 -*-
"""
Created on Sun Jan 26 10:44:59 2020

@author: Michael
"""

import re
import random
import string

# This is just here for local storage/testing. Won't need it with the cloud database.
user_db = []

class user:
    email = ""
    username = ""
    password = ""

    def signUp(self):
        em = re.compile('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
        pwp = re.compile("(?=.*?[0-9])(?=.*?[A-Za-z]).+")
        while True:
            email = input("Please enter your email address, or hit (e) at any time to exit signup: ")# check if email exists, if it does do not allow signup
            if em.match(email):
                if not (checkEMAIL(email)):
                    self.email = email
                    while True:
                        password = input("Enter your password (At least one letter, one number -- no space or special characters): ")
                        if pwp.match(password):
                            self.password = password
                            while True:
                                un = input("Email and password saved. Please enter a username (only letters and numbers): ")
                                unp = re.compile('[a-zA-Z0-9]+')        
                                # If username is correct, give account signup message!
                                if unp.match(un):
                                    print("\nSignup sucess! Welcome to BAM!!, %s!" %un)
                                    self.username = un
                                    return True
                                elif(email == 'e'):
                                    return False
                                else:
                                    print('Please follow the guidelines for usernames. Try again!')
                        elif(email == 'e'):
                            return False
                        else:
                            print("Password restrictions not followed. Please try again.")
                           
                else:
                    print("That email already exists in the system. Please sign up with another email or login!")
            elif(email == 'e'):
                return False             
            else:
                print("Not a valid email address, try again.")
    
    # function for new user inital information added.
    def InitialInfo(self):
        print("\n ADD NEW USER INFO PROCESS HERE!")
    
    def ChangePass(self):
        while True:
            Pass = input("Enter your new password (At least one letter, one number -- no space or special characters): ")
            pwp = re.compile("(?=.*?[0-9])(?=.*?[A-Za-z]).+")
            if(pwp.match(Pass)):
                if(Pass != self.password):
                    self.password = Pass
                    print("Password successfully changed!")
                    return
                else:
                    print("Password entered is the same as the old password. Please enter a different one.")
            else:
                print("Password does not meet restrictions. Please enter a different one.")
                
    def Budget_Breakdown(self):
        print("INSERT BUDGET BREAKDOWN HERE!")

# database checks email + password to confirm login
def checkUP(u, p):
    for user in user_db:
        if user.email == u and user.password == p:
            return True
    return False

# database checks email if it exists already then return True (need database implementation)
def checkEMAIL(u):
    for user in user_db:
        if user.email == u:
            return True
    return False

def ResetPass(email):
    # code that resets the password in the database (local implenentation currently)
    for user in user_db:
        if user.email == email:
            # generates random character password of length 8
            user.password = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(8))
            print("Password reset! Check email for password!")
            sendemail(email,user.password)

# this function needs to actually email them.. for now it will just print the string
def sendemail(email,password):
    print("Hey %s," %email + "your reset password is: %s" %password)
    
    
def main():
    C_user = []
    New = True
    while True:
        if C_user:
            if New:
                C_user.InitialInfo()
                New = False
            else:
                choice = input("Good to see you again, %s! To display your monthly budget breakdown, hit (b). To logout, hit (l). To change password hit (p). To exit BAM!!, hit (e): " %C_user.username)           
                # other choice commands can be added with functinality here
                if choice == "l":
                    C_user = []
                elif choice == "b":
                    C_user.Budget_Breakdown()
                elif choice == "e":
                    return
                elif choice == 'p':
                    C_user.ChangePass()
                else:
                    print("Command not recognized. Try again!")
        else:
            choice = input("Welcome to BAM!! The budget allocation management app. To sign up, hit (s). To login hit (l). To exit, hit (e): ")
            if choice == "s":
                newUser = user()
                if newUser.signUp():
                    # ADD TO DATABASE HERE
                    user_db.append(newUser)
                    C_user = newUser
                    New = True
            elif choice == "l":
                email = input("Enter your email address: ")
                em = re.compile('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
                if em.match(email):
                    password = input("Enter your password: ")
                    if checkUP(email, password):
                        print("Login success!")
                        C_user = newUser
                        New = False
                    else:
                        Forget = input("Your username or password is not correct. Did you forget your password? Yes (y) or no (n): ")
                        if Forget == 'y':
                            Reset = input("Reset password? Yes (y) or no (n): ")
                            if Reset == 'y':
                                # try communicating with database using checkEmail function
                                # if True it resets with a code and spits it out on Command line
                                # If false let them know that email doesn't exist in the system
                                if checkEMAIL(email):
                                    ResetPass(email)
                                else:
                                    print("Account does not exist! Try signing up for one.")
                            elif Reset == 'n':
                                print('Try again!')
                        elif Forget == 'n':
                            print('Try again!')
                        else:
                            print("Command not recognized. Try again!")
                else:
                    print("Invalid email address format. Try again!")
            elif choice == "e":
                return
            else:
                print("Command not recognized! Try again!.")
main()
