from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('pages/home.html')

@app.route("/detail")
def detail():
    return render_template('pages/detail-product-page.html')

# debug
if __name__ == '__main__':
       app.run(debug=True)