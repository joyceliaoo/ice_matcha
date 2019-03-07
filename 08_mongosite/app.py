#Team -- Joyce Liao, Aaron Li, Joan Chirinos
#SoftDev1 pd8
#K08 -- Ay Mon, Go Git It From Yer Flask
#2019-03-08

import os

from flask import Flask, render_template, request, redirect, url_for

from util import mongo

app = Flask(__name__)
app.secret_key = os.urandom(32)


@app.route('/')
def home():
    return render_template("nobel.html")

@app.route('/search')
def getData():
    type = request.args["type"]
    data = mongo.getData(request.args["arg"], type)
    return render_template("result.html", data=data)

@app.route("/launch")
def launch():
    addr = request.args["ip"]
    mongo.launchDB(addr)
    return redirect(url_for("home"))

if (__name__) == ("__main__"):
    app.debug = True
    app.run()
