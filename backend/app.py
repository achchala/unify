import os
from flask import Flask, redirect, url_for, request, jsonify, session
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json
from flask_bcrypt import Bcrypt
from bson import ObjectId


app = Flask(__name__)
app.secret_key = os.urandom(24)
bcrypt = Bcrypt(app)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


mongoClient = MongoClient(
    "mongodb+srv://turner:ellehacks@ellehacks.m6eghqr.mongodb.net/"
)
db = mongoClient.get_database("unifyDB")
collection = db.get_collection("users")
requestsCollection = db.get_collection("requests")


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
        session["user_id"] = str(user["_id"])
        return jsonify({"message": "Login successful"}), 200
    else:
        # Login failed
        return jsonify({"error": "Invalid email or password"}), 401


@app.route("/logout")
def logout():
    # Clear user session
    session.clear()
    return jsonify({"message": "Logout successful"}), 200


# API endpoint to fetch user program
@app.route("/user-program")
def get_user_program():
    user = collection.find_one()
    return jsonify({"program": user["program"]})


# API endpoint to fetch user courses
@app.route("/user-courses")
def get_user_courses():
    user = collection.find_one()
    return jsonify({"courses": user["courses"]})


# API endpoint to fetch user ID
@app.route("/user-id")
def get_user_id():
    user = collection.find_one()
    return jsonify({"userId": str(user["_id"])})


@app.route("/user-data")
def get_user_data():
    user_id = session.get("user_id")
    if user_id:
        user = collection.find_one({"_id": ObjectId(user_id)})
        if user:
            return jsonify(
                {
                    "userId": str(user["_id"]),
                    "program": user["program"],
                    "courses": user["courses"],
                }
            )
    return jsonify({"error": "User data not found"}), 404


# Route to handle request submission
@app.route("/submit-request", methods=["POST"])
def submit_request():
    data = request.json
    user_id = data.get("userId")
    program = data.get("program")
    program_match = data.get("programMatch")
    courses = data.get("courses")

    # Add entry to MongoDB collection
    request_entry = {
        "userId": user_id,
        "program": program,
        "programMatch": program_match,
        "courses": courses,
    }
    requests_collection.insert_one(request_entry)

    return jsonify({"message": "Request submitted successfully"}), 200


if __name__ == "__main__":
    app.run(debug=True)
