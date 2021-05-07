from flask import Flask, render_template
app = Flask(__name__)

@app.errorhandler(404)
def not_found(e):
    return "Sorry! No response. Try again."


@app.route("/")
def hello_world():
    return render_template('index2.html', phrase = "Hello", times = 5)

@app.route("/dojo")
def hello_dojo():
    print("Dojo!")
    return "Dojo!"


@app.route("/say/<string:name>")
def say_name(name):
    print("say", name)
    return "Hi " + name + "!"

@app.route("/repeat/<int:number>/<string:message>")
def numero_multipo(number, message):
    print(message *number)
    return f"{message} " * number

# @app.route("/variable/<phrase>/<times>")
# def hello_world():
#     return render_template('index2.html', phrase, times)

if __name__ == "__main__":
    app.run(debug = True)