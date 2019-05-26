from flask import Flask, jsonify, request, render_template
from flask_pymongo import PyMongo
import hash
import random
import string

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'clipboardDB'
app.config['MONGO_URI'] = 'add your mongo_uri'

mongo = PyMongo(app)


def generateToken():
    x = ''.join(random.choices(string.ascii_letters + string.digits, k=16))
    return x


# TODO: Add a beautiful home page

# home page
@app.route('/')
def root():
    return render_template('index.html')

@app.route('/static/')
def static_page():
    return render_template('index.html')


# public data
@app.route('/public/<urlString>', methods=['GET', 'POST'])
def get_public_page(urlString):
    publicData = mongo.db.publicData
    query = publicData.find_one({'urlString': urlString})

    if request.method == 'GET':
        if query:
            output = {
                'Success': True, 'urlString': query['urlString'], 'pageTitle': query['pageTitle'], 'pageBody': query['pageBody'], '_id': str(query['_id'])}
        else:
            output = {'Success': False,
                      'Comment': 'No data found for the given url.'}

    elif request.method == 'POST':
        pageTitle = request.json['pageTitle']
        pageBody = request.json['pageBody']

        # finding if the urlString is already taken
        if not query:
            publicDataId = publicData.insert(
                {'urlString': urlString, 'pageBody': pageBody, 'pageTitle': pageTitle})

            data = publicData.find_one({'_id': publicDataId})
            output = {
                'Success': True, 'urlString': data['urlString'], 'pageTitle': data['pageTitle'], 'pageBody': data['pageBody'], '_id': str(data['_id'])}
        else:
            updatedData = publicData.find_one_and_update(
                {'_id': query['_id']}, {'$set': {'pageTitle': pageTitle, 'pageBody': pageBody}})

            data = publicData.find_one({'_id': updatedData['_id']})
            output = {
                'Success': True, 'urlString': data['urlString'], 'pageTitle': data['pageTitle'], 'pageBody': data['pageBody'], '_id': str(data['_id'])}

    return jsonify({'results': output})

# getting user
@app.route('/getuser/<username>', methods=['POST'])
def get_user(username):
    usersData = mongo.db.usersData
    userToken = request.json['userToken']
    query = usersData.find_one({'username': username, 'userToken': userToken})

    if query:
        output = {
            'Success': True, 'Username': query['username'], 'Name': query['name'], '_id': str(query['_id'])}
    else:
        output = {'Success': False, 'Comment': 'User not found'}

    return jsonify({'results': output})


# adding user
@app.route('/adduser/<username>', methods=['POST'])
def add_user(username):
    usersData = mongo.db.usersData
    query = usersData.find_one({'username': username})

    name = request.json['name']
    passwd = request.json['passwd']
    passwd = hash.hash_password(passwd)
    userToken = generateToken()

    if not query:
        usersDataId = usersData.insert(
            {'username': username, 'name': name, 'passwd': passwd, 'userToken': userToken})

        data = usersData.find_one({'_id': usersDataId})
        output = {
            'Success': True, 'Username': data['username'], 'Name': data['name'], '_id': str(data['_id']), 'userToken': userToken}
    else:
        output = {'Success': False, 'Comment': 'User already exists'}

    return jsonify({'results': output})

# getting userToken for certain user
@app.route('/gettoken/<username>', methods=['POST'])
def get_token(username):
    passwd = request.json['passwd']
    usersData = mongo.db.usersData
    query = usersData.find_one({'username': username})
    if query:
        if (hash.verify_password(query['passwd'], passwd)):
            output = {
                'Success': True, 'userToken': query['userToken']}
        else:
            output = {'Success': False, 'Comment': 'Password is not correct'}
    else:
        output = {
            'Success': False, 'Comment': 'User not found'}
    return jsonify({'results': output})

# getting private user data
@app.route('/private/getpage/<username>/<urlString>', methods=['POST'])
def get_private_page(username, urlString):
    userToken = request.json['userToken']
    usersData = mongo.db.usersData
    query2 = usersData.find_one({'username': username, 'userToken': userToken})

    privateData = mongo.db.privateData
    query = privateData.find_one(
        {'username': username, 'urlString': urlString})

    if query2:
        if query:
            output = {
                'Success': True, 'urlString': query['urlString'], 'Username': query['username'], 'pageTitle': query['pageTitle'], 'pageBody': query['pageBody'], '_id': str(query['_id'])}
        else:
            output = {'Success': False, 'Comment': 'Page not found'}
    else:
        output = {'Success': False,
                  'Comment': 'User not found or Token is incorrect'}

    return jsonify({'results': output})

# adding private user data
@app.route('/private/addpage/<username>/<urlString>', methods=['POST'])
def add_private_page(username, urlString):

    pageTitle = request.json['pageTitle']
    pageBody = request.json['pageBody']
    userToken = request.json['userToken']

    privateData = mongo.db.privateData
    query = privateData.find_one(
        {'username': username, 'urlString': urlString})

    # if the user exists or not
    usersData = mongo.db.usersData
    query2 = usersData.find_one({'username': username, 'userToken': userToken})

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
