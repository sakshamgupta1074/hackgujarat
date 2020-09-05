import json 
import voiceassistant
from pymongo import MongoClient   

voiceassistant.main()

myclient = MongoClient("mongodb://localhost:27017/")  

db = myclient["patients"] 

Collection = db["data"] 
  
with open('result.json') as file: 
    file_data = json.load(file) 
      
if isinstance(file_data, list): 
    Collection.insert_many(file_data)   
else: 
    Collection.insert_one(file_data) 