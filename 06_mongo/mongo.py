# Team Spicy Mango -- Joyce Liao, Wei Wen Zhou
# Softdev2 pd8
# K06 -- Yummy Mongo Py
# 2019-03-01

import pymongo
SERVER_ADDR = "159.65.234.2"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def find_br(borough):
    results = collection.find({"borough":borough})
    for result in results:
        name = result["name"]
        if (name != ""):
            print(name)

def find_zip(zipcode):
    results = collection.find({"address.zipcode": zipcode})
    for result in results:
        name = result["name"]
        print(name)

def find_zipgr(zipcode, grade):
    results = collection.find({ "$and": [{"address.zipcode": zipcode}, {"grades.grade":grade}]})
    for result in results:
	print(result["name"])

def find_zipthr(zipcode, threshold):
    results = collection.find({"$and": [{"address.zipcode":zipcode}, {"grades.score": {"$lt":threshold}}]})
    for result in results:
        print(result["name"])

# tests
# find_br("Brooklyn")
# find_zip("11215")
# find_zip("10300")
# find_zipgr("11215", "A")
# find_zipthr("11215", 8)
