# JSON-Power-DB-Project

JSONPowerDB is a High Performance, Light Weight, Ajax Enabled, Serverless, Simple to Use, Real-time Database. Easy and fast to develop database applications without using any server side programming / scripting or without installing any kind of database.

It is basically a Database Server with Developer friendly REST API services.

JsonPowerDB has ready to use API for Json document DB, RDBMS, Key-value DB, GeoSpatial DB and Time Series DB functionality. JPDB supports and advocates for true serverless and pluggable API development.

Documentation Link --> https://login2explore.com/jpdb/docs.html#jpdb-command-request

![image](https://user-images.githubusercontent.com/76425862/177053102-99182d48-d40c-446f-9c09-83dd4dd510f2.png)

### Benefits Of Using JSONPowerDB:
- It is realtime and simple to use.
- Easy to maintain the reconds.
- Serverless support - fast development - cuts time to market.
- Build using world's fastest indexing engine PowerIndex which gives unlimited data capacity, supporting unlimited indexes, realtime data processing which makes it fast and secure.
- Give developer friendly Webservices API which reduce the developement cost.
- Multiple Security Layers.
- Inbuilt support for querying multiple databases.
- It is light weight.
- It is a serverless database so that you don't have to choose an instance size at all.

![image](https://user-images.githubusercontent.com/76425862/177053664-27e22530-1012-4aed-9746-130678ac6e01.png)

## Project Breakdown :

In this project, I create 6 methods to play with JSONPowerDB.

1. GET ALL IN DB --> Get all records in DB
2. GET BY KEY --> Get your desired data by inputting the key name
3. GET BY RECORD --> Get data by putting the record number
4. PUT METHOD --> Insert single record to the DB
5. UPDATE IN DB --> Update the data in DB
6. REMOVE IN DB --> Remove the data in DB

### GET ALL IN DB -->

![image](https://user-images.githubusercontent.com/76425862/177054206-e24dcc7a-1ea5-4e2c-a6ff-6aa595ed330c.png)
![image](https://user-images.githubusercontent.com/76425862/177053641-d4959ff9-8182-4f30-a044-dd356600da1e.png)

```
{
    "token": "608862679|6881615563234464505|608862542",
    "dbName": "INDORE-TERAPANTH-DIRECTORY",
    "cmd": "GET_ALL",
    "rel": "MEMBERS-FAMILY",
    "pageNo": 1,
    "pageSize": 5,
    "createTime": true,
    "updateTime": true
}
```

In response, it will give you all the records in the database of particular relation metioned.

```
{
  "data": "{\"file_status\":\"OK\",\"total_records\":4,\"json_records\":[{\"rec_no\":1,\"created\":1656865732294,\"record\":{\"password\":\"1234\",\"name\":\"Harsh\",\"id\":\"3\",\"mobileno\":\"9967025671\",\"email\":\"harsh@gmail.com\",\"mark\":100},\"updated\":1656865732294},{\"rec_no\":2,\"created\":1656866471493,\"record\":{\"name\":\"Indrajit Sahu\",\"id\":\"2\",\"mobileno\":\"1064728030\",\"email\":\"ind7@gmail.com\"},\"updated\":1656866471493},{\"rec_no\":3,\"created\":1656866541343,\"record\":null,\"updated\":1656866541343},{\"rec_no\":4,\"created\":1656866688123,\"record\":null,\"updated\":1656868402835}],\"total_pages\":1,\"current_page\":1}",
  "message": "DATA RETRIEVED FROM PI",
  "status": 200
}
```

All the records will be shown accordingly.

### GET BY KEY -->

![image](https://user-images.githubusercontent.com/76425862/177053614-5f2b5478-700d-4588-939f-93bbf3660b18.png)

It will take 3 parameters as database name, relation and the key to find the record at tha database.

### GET BY RECORD -->

![image](https://user-images.githubusercontent.com/76425862/177053677-54e47efb-c097-45c8-a6dc-7df3d52b95b4.png)

Here we just have to give the database and relation along with the record number, and it will give us the record present in the relation.

### PUT Method to Insert Data -->

![image](https://user-images.githubusercontent.com/76425862/177053729-c57923ca-6a25-499c-b033-102e79e62abb.png)

By PUT method, we can create/insert data in to the database, either it will be row or coloumn, data can be insert multiple times.

With this you can create the databases and relations. 

### UPDATE IN DB -->

![image](https://user-images.githubusercontent.com/76425862/177053962-18151075-0e27-4e92-a1e4-a6fdff43453d.png)

In UPDATE, we can modify the existing records in the databases.

Here, we can update multiple records in the database or add a new column in a record.

### REMOVE IN DB -->

![image](https://user-images.githubusercontent.com/76425862/177054058-aea14071-59e3-4103-a37c-ddb8a1339a58.png)
![image](https://user-images.githubusercontent.com/76425862/177054071-4c60b222-2bdf-42ae-a869-7c64970f470c.png)


By this REMOVE method, we can remove the entire record from the relation with just the record number.

-----------------------------------------------------------------------------------------------------------------------------------------

Apart from this, we can perform other oprations as well like first-record, last-record, remove-database, remove-relation and much more. But this is a basic project to understand what and how the JSONPowerDB works.





