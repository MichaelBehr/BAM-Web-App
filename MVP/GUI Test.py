# -*- coding: utf-8 -*-
"""
Created on Tue Feb 11 10:49:48 2020

@author: Michael
"""
import tkinter as tk
from tkinter import *
from PIL import Image
from PIL import ImageTk
import tkinter.messagebox as tm
from tkinter import font  as tkfont

user_db = []

class user:
    email = ""
    username = ""
    password = ""

class BAM(tk.Tk):

    def __init__(self, *args, **kwargs):
        tk.Tk.__init__(self, *args, **kwargs)

        self.title_font = tkfont.Font(family='Helvetica', size=14, weight="bold", slant="italic")

        # the container is where we'll stack a bunch of frames
        # on top of each other, then the one we want visible
        # will be raised above the others
        container = tk.Frame(self)
        container.pack(side="top", fill="both", expand=True)
        container.grid_rowconfigure(0, weight=1)
        container.grid_columnconfigure(0, weight=1)
        
        self.frames = {}
        self.frames["Startup"] = Startup(parent=container, controller=self)
        self.frames["Expense"] = Expense(parent=container, controller=self)
        self.frames["Reset"] = Reset(parent=container, controller=self)
        self.frames["Signedup"] = Signedup(parent=container, controller=self)        
        self.frames["Loggedin"] = Loggedin(parent=container, controller=self)
        self.frames["Signup"] = Signup(parent=container, controller=self)
        
        self.frames["Startup"].grid(row=0, column=0, sticky="nsew")
        self.frames["Expense"].grid(row=0, column=0, sticky="nsew")
        self.frames["Reset"].grid(row=0, column=0, sticky="nsew")
        self.frames["Signedup"].grid(row=0, column=0, sticky="nsew")
        self.frames["Loggedin"].grid(row=0, column=0, sticky="nsew")
        self.frames["Signup"].grid(row=0, column=0, sticky="nsew")
        
        self.show_frame("Startup")

    def show_frame(self, page_name):
        # Display frames
        frame = self.frames[page_name]
        frame.tkraise()


class Startup(tk.Frame):

    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)
        self.controller = controller
        title = tk.Label(self, text="Welcome to BAM! ", font=controller.title_font)
        title.grid(row=1,column = 0,columnspan = 3)
        subtitle = tk.Label(self, text="The budgeting app that works for you!")
        subtitle.grid(row=2,column = 0,columnspan = 3)
        
        image = Image.open("F:\\Users\\Michael\\Documents\\Python Scripts\\ECE 651 Project\\ece-651-project---bam\\BAM.png")
        image = image.resize((400, 250), Image.ANTIALIAS) ## The (250, 250) is (height, width)
        photo = ImageTk.PhotoImage(image)
        pic = tk.Label(self, image=photo)
        pic.photo = photo
        pic.grid(row=0, column=0,columnspan=3)
        
        label_username = tk.Label(self, text="Username")
        label_password = tk.Label(self, text="Password")
 
        self.entry_username = tk.Entry(self)
        self.entry_password = tk.Entry(self, show="*")
 
        label_username.grid(row=3, sticky=tk.E)
        label_password.grid(row=4, sticky=tk.E)
        self.entry_username.grid(row=3, column=1)
        self.entry_password.grid(row=4, column=1)
 
        checkbox = tk.Checkbutton(self, text="Keep me logged in")
        checkbox.grid(row=5,columnspan=2)
 
        logbtn = tk.Button(self, text="Login", command= self._login_btn_clicked)
        signupbtn = tk.Button(self, text="Sign up", command= self._signup_btn_clicked)
        logbtn.grid(row=6,column=1,columnspan=1)
        signupbtn.grid(row=6,column = 2,columnspan=3)

    def _login_btn_clicked(self):
         
        # need to combine with fb_auth
        username = self.entry_username.get()
        password = self.entry_password.get()
 
        # use the database checks here that Saf did
 
        if username == "saf" and password == "123":
            tm.showinfo("Login info", "Welcome Saf!")
            self.controller.frames["Loggedin"].account(username,password)
            self.controller.show_frame("Loggedin")
        else:
            tm.showerror("Login error", "Incorrect username or password.")
            
    def _signup_btn_clicked(self):
         
        # need to combine with fb_auth
        self.controller.username = self.entry_username.get()
        self.controller.password = self.entry_password.get()
        self.controller.show_frame("Signup")

class Loggedin(tk.Frame):

    def __init__(self, parent, controller):
        self.username = ''
        self.password = ''
        tk.Frame.__init__(self, parent)
        self.controller = controller
        image = Image.open("F:\\Users\\Michael\\Documents\\Python Scripts\\ECE 651 Project\\ece-651-project---bam\\BAM.png")
        image = image.resize((400, 250), Image.ANTIALIAS) ## The (250, 250) is (height, width)
        photo = ImageTk.PhotoImage(image)
        pic = tk.Label(self, image=photo)
        pic.photo = photo
        pic.grid(row=0, column=0,columnspan=3)
        button1 = tk.Button(self, text="Logout",
                           command=lambda: controller.show_frame("Startup"))
        button1.grid(row=4, column=1)
        button2 = tk.Button(self, text="Expense Breakdown",
                           command=lambda: controller.show_frame("Expense"))
        button2.grid(row=2, column=1)
        button3 = tk.Button(self, text="Reset Password",
                           command=lambda: controller.show_frame("Reset"))
        button3.grid(row=3, column=1)
        
    def account(self,username,password):
        self.username = username
        self.password = password
        text = "Good to see you again, %s!" %self.username
        label = tk.Label(self, text=text, font=self.controller.title_font)
        label.grid(row=1, column=1, columnspan=1)
        
class Signup(tk.Frame):

    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)
        self.controller = controller
        label_email = tk.Label(self, text="Email")
        label_password = tk.Label(self, text="Password")
 
        self.entry_email = tk.Entry(self)
        self.entry_password = tk.Entry(self, show="*")
        
        label_email.grid(row=3, sticky=tk.E)
        label_password.grid(row=4, sticky=tk.E)
        self.entry_email.grid(row=3, column=1)
        self.entry_password.grid(row=4, column=1)
        image = Image.open("F:\\Users\\Michael\\Documents\\Python Scripts\\ECE 651 Project\\ece-651-project---bam\\BAM.png")
        image = image.resize((400, 250), Image.ANTIALIAS) ## The (250, 250) is (height, width)
        photo = ImageTk.PhotoImage(image)
        pic = tk.Label(self, image=photo)
        pic.photo = photo
        pic.grid(row=0, column=0,columnspan=3)
        label1 = tk.Label(self, text="Welcome to BAM!", font=controller.title_font)
        label1.grid(row=1, column=0, columnspan=3)
        label1 = tk.Label(self, text="Sign up with an email address and password.")
        label1.grid(row=2, column=0, columnspan=3)
        button1 = tk.Button(self, text="Go to the start page",
                           command=lambda: controller.show_frame("Startup"))
        button2 = tk.Button(self, text="Sign up", command = self._signup_btn_clicked)
        button1.grid(row=6, column=0,columnspan=3)
        button2.grid(row=5, column=0,columnspan=3)
        
    def _signup_btn_clicked(self):
         
        # need to combine with fb_auth
        email = self.entry_email.get()
        password = self.entry_password.get()
 
        # user database check here to make sure there is no existing email
 
        if email != "saf":
            tm.showinfo("Login info", "Welcome, %s!" %email)
            self.controller.frames["Loggedin"].account(email,password)
            self.controller.show_frame("Signedup")
        else:
            tm.showerror("Signup error", "Email exists!")
        
class Reset(tk.Frame):
    
    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)
        self.controller = controller
        image = Image.open("F:\\Users\\Michael\\Documents\\Python Scripts\\ECE 651 Project\\ece-651-project---bam\\BAM.png")
        image = image.resize((400, 250), Image.ANTIALIAS) ## The (250, 250) is (height, width)
        photo = ImageTk.PhotoImage(image)
        pic = tk.Label(self, image=photo)
        pic.photo = photo
        pic.grid(row=0, column=0,columnspan=3)
        label = tk.Label(self, text="Reset your password", font=controller.title_font)
        label.grid(row=1, column=0, columnspan=3)
        button = tk.Button(self, text="Exit.",
                           command=lambda: controller.show_frame("Startup"))
        button.grid(row=2, column=1)
        
class Expense(tk.Frame):
     
    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)
        self.controller = controller
        image = Image.open("F:\\Users\\Michael\\Documents\\Python Scripts\\ECE 651 Project\\ece-651-project---bam\\BAM.png")
        image = image.resize((400, 250), Image.ANTIALIAS) ## The (250, 250) is (height, width)
        photo = ImageTk.PhotoImage(image)
        pic = tk.Label(self, image=photo)
        pic.photo = photo
        pic.grid(row=0, column=0,columnspan=3)
        label = tk.Label(self, text="Monthly Breakdown", font=controller.title_font)
        label.grid(row=1, column=0, columnspan=3)
        button = tk.Button(self, text="Main",
                           command=lambda: controller.show_frame("Loggedin"))
        button.grid(row=2, column=1) 

class Signedup(tk.Frame):
     
    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)
        self.controller = controller
        image = Image.open("F:\\Users\\Michael\\Documents\\Python Scripts\\ECE 651 Project\\ece-651-project---bam\\BAM.png")
        image = image.resize((400, 250), Image.ANTIALIAS) ## The (250, 250) is (height, width)
        photo = ImageTk.PhotoImage(image)
        pic = tk.Label(self, image=photo)
        pic.photo = photo
        pic.grid(row=0, column=0,columnspan=3)
        label = tk.Label(self, text="Way to be signed up!", font=controller.title_font)
        label.grid(row=1, column=0, columnspan=3)
        button = tk.Button(self, text="Main",
                           command=lambda: controller.show_frame("Loggedin"))
        button.grid(row=2, column=1) 
        

if __name__ == "__main__":
    app = BAM()
    app.mainloop()