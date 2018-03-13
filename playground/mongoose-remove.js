const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({})
// .then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5aa7f20391fffc00145be54b'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5aa7f20391fffc00145be54b').then((todo) => {
  console.log(todo)
})
