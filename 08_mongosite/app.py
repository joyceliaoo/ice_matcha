#Team Mongo-lians -- Joyce Liao, Aaron Li, Joan Chirinos
#SoftDev1 pd8
#K08 -- Ay Mon, Go Git It From Yer Flask
#2019-03-08

import os

from flask import Flask, render_template, request, redirect, url_for, flash

from util import mongo

app = Flask(__name__)
app.secret_key = os.urandom(32)


@app.route('/')
def home():
    return render_template("nobel.html")

@app.route('/search', methods=["POST"])
def getData():
    type = request.form.get("type")
    data = mongo.getData(request.form.get("arg").lower(), type)
    if (data==[]):
        flash("No results found")
    return render_template("result.html", data=data)

@app.route("/launch", methods=["POST"])
def launch():
    try:
        addr = request.form.get("ip")
        mongo.launchDB(addr)
    except:
        flash("Invalid server address")
    return redirect(url_for("home"))

if (__name__) == ("__main__"):
    app.debug = True
    app.run()
