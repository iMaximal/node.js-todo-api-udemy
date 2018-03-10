const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  completedAt: {
    type: Number,
  },
})

const newTodo = new Todo({
  text: 'Cook dinner',
})

newTodo.save()
  .then((doc) => {
    console.log('Saved todo', doc)
  })
  .catch((error) => {
    console.log('Unable to save todo', error)
  })

const otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123,
})

otherTodo.save()
  .then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2))
  })
  .catch((error) => {
    console.log('Unable to save', error)
  })
