from flask import Flask, redirect, url_for, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json
from flask_bcrypt import Bcrypt


app = Flask(__name__)
bcrypt = Bcrypt(app)
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
    hashed_password = bcrypt.generate_password_hash(data["password"]).decode("utf-8")
    data["password"] = hashed_password
    # Insert the user data into the users collection
    collection.insert_one(data)
    return jsonify({"message": "Data added to MongoDB"})  # Return JSON response


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = collection.find_one({"email": email})

    if user and bcrypt.check_password_hash(user["password"], password):
        # Login successful
        return jsonify({"message": "Login successful"}), 200
    else:
        # Login failed
        return jsonify({"error": "Invalid email or password"}), 401


if __name__ == "__main__":
    app.run(debug=True)
