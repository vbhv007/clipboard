from flask import Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'clipboardDB'
app.config['MONGO_URI'] = 'mongodb+srv://vbhv:qwerty123@clipboarddb-vm1cu.mongodb.net/test?retryWrites=true'

mongo = PyMongo(app)


@app.route('/<urlString>', methods=['GET', 'POST'])
def get_public_page(urlString):
    publicData = mongo.db.publicData
    query = publicData.find_one({'urlString': urlString})

    if request.method == 'GET':
        if query:
            output = {
                'Success': True, 'urlString': query['urlString'], 'bodyData': query['bodyData']}
        else:
            output = {'Success': False, 'Comment': 'No data found'}

    elif request.method == 'POST':
        bodyData = request.json['bodyData']

        # finding if the urlString is already taken
        if not query:
            publicDataId = publicData.insert(
                {'urlString': urlString, 'bodyData': bodyData})

            data = publicData.find_one({'_id': publicDataId})
            output = {
                'Success': True, 'urlString': data['urlString'], 'bodyData': data['bodyData']}
        else:
            output = {'Success': False, 'Comment': 'Url already exists'}

    return jsonify({'results': output})


@app.route('/user/<username>', methods=['GET', 'POST'])
def get_private_page(username):
    usersData = mongo.db.usersData
    query = usersData.find_one({'username': username})

    if request.method == 'GET':
        if query:
            output = {
                'Success': True, 'Username': query['username'], 'Name': query['name'], 'Pages': query['pages']}
        else:
            output = {'Success': False, 'Comment': 'User Not found'}

    elif request.method == 'POST':
        name = request.json['name']
        passwd = request.json['passwd']

        if not query:
            userPages = []
            usersDataId = usersData.insert(
                {'username': username, 'name': name, 'passwd': passwd, 'pages': userPages})

            data = usersData.find_one({'_id': usersDataId})
            output = {
                'Success': True, 'Username': data['username'], 'Name': data['name'], 'Pages': data['pages']}
        else:
            output = {'Success': False, 'Comment': 'User already exists'}

    return jsonify({'results': output})


if __name__ == '__main__':
    app.run(debug=True)
