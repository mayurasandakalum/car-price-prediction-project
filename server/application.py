from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for your entire Flask app
CORS(app)

from app.routes import car_routes
