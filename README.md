# Node.JS - To Do API

Study project.

"The Complete Node.js Developer Course (2nd Edition) " (Udemy).

Technologies: ES6, Node.JS, Express, MongoDB, Mongoose, Lodash, Supertest, Expect, Mocha.

## API Demo

https://pacific-ocean-12093.herokuapp.com/todos


## Install

Install Mongo

Install RoboMongo

On Windows (in Mongo bin directory, create mongo-data before if not exist):
````bash
mongod.exe --dbpath /Users/[YOUR_USER]/mongo-data
````
On Mac OS do same.

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

Start mongo (MacOS) and web server:
````bash
npm run mongo
npm run dev
````


### Useful commands

````bash
heroku addons:create mongolab:sandbox
heroku config
heroku config:set VAR=VALUE
heroku config:get VAR
heroku config:unset VAR
````
