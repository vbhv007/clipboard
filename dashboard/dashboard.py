from flask import Flask,render_template, url_for,redirect
import random, string
app = Flask(__name__,static_url_path='')




@app.route('/')
def index_unnamed():
	url = ''.join(random.choices(string.ascii_letters + string.digits, k=6))
	return redirect(url)




@app.route('/<urlString>')
def index_named(urlString):
	return render_template('index.html')





if __name__ == "__main__":
	app.run(debug = True)