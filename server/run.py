from app import app
from flask_cors import CORS

# Enable CORS for your entire Flask app
CORS(app)

if __name__ == '__main__':
    print("Starting Python Flask Server For Car Price Prediction...")
    app.run(debug=True)
