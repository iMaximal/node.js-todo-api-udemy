# Node.JS - To Do API

Study project.

"The Complete Node.js Developer Course (2nd Edition) " (Udemy).

Technologies: ES6, Node.JS, Express, MongoDB.

## Install

Install Mongo

Install RoboMongo

On Windows (in Mongo bin directory, create mongo-data before if not exist):
````bash
mongod.exe --dbpath /Users/[YOUR_USER]/mongo-data
````

Create first collection

mongo.exe:
````bash
db.Todos.insert({text: 'Create new Node course'})
````

Test result:
````bash
db.Todos.find()
````

Install dependencies:
````bash
npm install
````

## Usage

Autotests:
````bash
npm test:watch
````

Start web server:
````bash
npm run dev
````
