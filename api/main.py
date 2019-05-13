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
                'Success': True, 'urlString': query['urlString'], 'bodyData': query['bodyData'], '_id': str(query['_id'])}
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
                'Success': True, 'urlString': data['urlString'], 'bodyData': data['bodyData'], '_id': str(data['_id'])}
        else:
            output = {'Success': False, 'Comment': 'Url already exists'}

    return jsonify({'results': output})


@app.route('/user/<username>', methods=['GET', 'POST'])
def get_user(username):
    usersData = mongo.db.usersData
    query = usersData.find_one({'username': username})

    if request.method == 'GET':
        if query:
            output = {
                'Success': True, 'Username': query['username'], 'Name': query['name'], '_id': str(query['_id'])}
        else:
            output = {'Success': False, 'Comment': 'User not found'}

    elif request.method == 'POST':
        name = request.json['name']
        passwd = request.json['passwd']

        if not query:
            usersDataId = usersData.insert(
                {'username': username, 'name': name, 'passwd': passwd})

            data = usersData.find_one({'_id': usersDataId})
            output = {
                'Success': True, 'Username': data['username'], 'Name': data['name'], '_id': str(data['_id'])}
        else:
            output = {'Success': False, 'Comment': 'User already exists'}

    return jsonify({'results': output})


@app.route('/<username>/<urlString>', methods=['GET', 'POST'])
def get_private_page(username, urlString):
    privateData = mongo.db.privateData
    query = privateData.find_one(
        {'username': username, 'urlString': urlString})

    # if the user exists or not
    usersData = mongo.db.usersData
    query2 = usersData.find_one({'username': username})

    if request.method == 'GET':
        if query:
            output = {
                'Success': True, 'urlString': query['urlString'], 'Username': query['username'], 'pageTitle': query['pageTitle'], 'pageBody': query['pageBody'], '_id': str(query['_id'])}
        else:
            output = {'Success': False, 'Comment': 'User or Page not found'}

    elif request.method == 'POST':
        pageTitle = request.json['pageTitle']
        pageBody = request.json['pageBody']

        # if the page is not there
        if not query:
            if query2:
                privateDataId = privateData.insert(
                    {'urlString': urlString, 'username': username, 'pageTitle': pageTitle, 'pageBody': pageBody})

                data = privateData.find_one({'_id': privateDataId})
                output = {
                    'Success': True, 'urlString': data['urlString'], 'Username': data['username'], 'pageTitle': data['pageTitle'], 'pageBody': data['pageBody'], '_id': str(data['_id'])}

            # if the user doesn't exists
            else:
                output = {'Success': False, 'Comment': 'User not found'}

        # page is there => update it
        else:

            updatedData = privateData.find_one_and_update(
                {'_id': query['_id']}, {'$set': {'pageTitle': pageTitle, 'pageBody': pageBody}})

            data = privateData.find_one({'_id': updatedData['_id']})
            output = {
                'Success': True, 'urlString': data['urlString'], 'Username': data['username'], 'pageTitle': data['pageTitle'], 'pageBody': data['pageBody'], '_id': str(data['_id'])}

    return jsonify({'results': output})


if __name__ == '__main__':
    app.run(debug=True)
