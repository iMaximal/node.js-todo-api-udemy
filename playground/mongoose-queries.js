const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// const id = '5aa3ec1c3456f031cc8d8a6a'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   // if we are use mongoose, we don't need to convert by new ObjectId
//   _id: id,
// })
//   .then((todos) => {
//     console.log('Todos', todos)
//   })
//
// Todo.findOne({
//   _id: id,
// })
//   .then((todo) => {
//     console.log('Todo', todo)
//   })

// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('ID not found')
//     }
//     console.log('Todo By ID', todo)
//   })
//   .catch((e) => console.log(e))

User.findById('5aa3f4ada6cb3eba65f967951')
  .then((user) => {
    if (!user) {
      return console.log('Unable to find user')
    }

    console.log(JSON.stringify(user, undefined, 2))
  })
  .catch((e) => console.log(e))
