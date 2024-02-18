from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient(
    "mongodb+srv://turner:ellehacks@ellehacks.m6eghqr.mongodb.net/?retryWrites=true&w=majority"
)

# Select database
db = client["test_database"]

# Select collection
collection = db["test_collection"]

# Create a document to insert
document = {"name": "John Doe", "age": 30, "city": "New York"}

# Insert document into collection
inserted_document = collection.insert_one(document)

# Print the inserted document's ID
print("Inserted document ID:", inserted_document.inserted_id)
