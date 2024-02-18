from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient(
    "mongodb+srv://turner:ellehacks@ellehacks.m6eghqr.mongodb.net/?retryWrites=true&w=majority"
)

# Select database
db = client["unifyDB"]

# Select collection
collection = db["users"]

# Create a document to insert
document = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "university": "University",
    "program": "Program",
    "courses": ["Course 1", "Course 2"],
}

# Insert document into collection
inserted_document = collection.insert_one(document)

# Print the inserted document's ID
print("Inserted document ID:", inserted_document.inserted_id)
