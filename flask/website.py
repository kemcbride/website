from flask import Flask, render_template

app = Flask(__name__)



@app.route("/")
def hello_world():
    return render_template("home.html") 


@app.route("/demo/d3")
def d3_demo():
    return render_template("d3_demo.html")


@app.route("/demo/c3")
def c3_demo():
    return render_template("c3_demo.html")
