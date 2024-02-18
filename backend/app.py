from flask import Flask, redirect, url_for, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


mongoClient = MongoClient(
    "mongodb+srv://turner:ellehacks@ellehacks.m6eghqr.mongodb.net/"
)
db = mongoClient.get_database("unifyDB")
collection = db.get_collection("users")


# Route to handle signup
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json  # Get the JSON data from the request body
    # Insert the user data into the users collection
    collection.insert_one(data)
    return jsonify({"message": "Data added to MongoDB"})  # Return JSON response


if __name__ == "__main__":
    app.run(debug=True)
