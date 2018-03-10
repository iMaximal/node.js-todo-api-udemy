const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')


const Todo = mongoose.model('Todo', new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  },
}))


// const otherTodo = new Todo({})
//
// otherTodo.save()
//   .then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2))
//   })
//   .catch((error) => {
//     console.log('Unable to save', error)
//   })


// User
// email - require it - trim it - set type - set min length of 1
const User = mongoose.model('User', new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
}))

const user = new User({
  email: 'max@example.com',
})

user.save()
  .then((doc) => {
    console.log('User saved', doc)
  })
  .catch((error) => {
    console.log('Unable to save user', error)
  })
