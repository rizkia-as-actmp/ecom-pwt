from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('pages/home.html')

@app.route("/detail")
def detail():
    return render_template('pages/detail-product-page.html')

@app.route("/search")
def search():
    return render_template('pages/search-page.html')

@app.errorhandler(404)   
def not_found():  
  return render_template("pages/404.html"),404

@app.errorhandler(500)
def special_exception_handler(e):
    return render_template("pages/404.html"), 500

# debug
if __name__ == '__main__':
       app.run(debug=True)