from flask import Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'clipboardDB'
app.config['MONGO_URI'] = 'mongodb+srv://vbhv:qwerty123@clipboarddb-vm1cu.mongodb.net/test?retryWrites=true'

mongo = PyMongo(app)


@app.route('/', methods=['GET'])
def get_the_page():
    return jsonify({'result': 'this is the result'})


if __name__ == '__main__':
    app.run(debug=True)
