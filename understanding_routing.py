from flask import Flask
app = Flask(__name__)

@app.errorhandler(404)
def not_found(e):
    return "Sorry! No response. Try again."


@app.route("/")
def hello_world():
    print("Hello World")
    return "Hello World!"

@app.route("/dojo")
def hello_dojo():
    print("Dojo!")
    return "Dojo!"

@app.route("/say/<name>")
def say_name(name):
    print("say", str(name))
    return "Hi " + str(name) + "!"

@app.route("/repeat/<number>/<message>")
def numero_multipo(number, message):
    print(message *int(number))
    return f"{str(message)} " *int(number)

if __name__ == "__main__":
    app.run(debug = True)