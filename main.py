from flask import Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'clipboardDB'
app.config['MONGO_URI'] = 'mongodb+srv://vbhv:qwerty123@clipboarddb-vm1cu.mongodb.net/test?retryWrites=true'

mongo = PyMongo(app)


@app.route('/<urlString>', methods=['GET'])
def get_the_page(urlString):
    publicData = mongo.db.publicData
    query = publicData.find_one({'urlString': urlString})
    if query:
        output = {
            'Success': True, 'urlString': query['urlString'], 'bodyData': query['bodyData']}
    else:
        output = {'Success': False, 'Comment': 'No data found'}
    return jsonify({'results': output})


@app.route('/<urlString>', methods=['POST'])
def save_the_page(urlString):
    publicData = mongo.db.publicData
    bodyData = request.json['bodyData']

    # finding if the urlString is already taken
    query = publicData.find_one({'urlString': urlString})
    if not query:
        publicDataId = publicData.insert(
            {'urlString': urlString, 'bodyData': bodyData})

        data = publicData.find_one({'_id': publicDataId})
        output = {
            'Success': True, 'urlString': data['urlString'], 'bodyData': data['bodyData']}
    else:
        output = {'Success': False, 'Comment': 'Url already exists'}

    return jsonify({'results': output})


if __name__ == '__main__':
    app.run(debug=True)
