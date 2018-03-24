require('./config/config')
const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')
const { mongoose } = require('./db/mongoose') // no delete, it's for tests!
const { Todo } = require('./models/todo')
const { User } = require('./models/user')
const { authenticate } = require('./middleware/authenticate')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())


app.post('/todos', authenticate, (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    _creator: req.user._id,
  })

  todo.save()
    .then((doc) => {
      res.send(doc)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
})


app.get('/todos', authenticate, (req, res) => {
  Todo.find({
    _creator: req.user._id,
  })
    .then((todos) => {
      res.send({ todos })
    })
    .catch((e) => res.status(400).send(e))
})


app.get('/todos/:id', authenticate, (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findOne({
    _id: id,
    _creator: req.user._id,
  })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send()
      }

      res.send({ todo })
    })
    .catch((e) => {
      res.status(400).send()
    })
})


app.delete('/todos/:id', authenticate, async (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  try {
    const todo = await Todo.findOneAndRemove({
      _id: id,
      _creator: req.user._id,
    })


    if (!todo) {
      return res.status(404).send()
    }

    res.send({ todo })
  } catch (e) {
    res.status(400).send()
  }
})


app.patch('/todos/:id', authenticate, (req, res) => {
  const { id } = req.params
  const body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findOneAndUpdate({ _id: id, _creator: req.user._id }, { $set: body }, { new: true })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send()
      }

      res.send({ todo })
    })
    .catch((e) => {
      res.status(400).send()
    })
})


// POST /users
app.post('/users', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password'])
    const user = new User(body)
    await user.save()
    const token = await user.generateAuthToken()
    res.header('x-auth', token).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})


app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user)
})


// POST /users/login { email, password }
app.post('/users/login', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password'])
    const user = await User.findByCredentials(body.email, body.password)
    const token = await user.generateAuthToken()
    res.header('x-auth', token).send(user)
  } catch (e) {
    res.status(400).send()
  }
})


app.delete('/users/me/token', authenticate, async (req, res) => {
  try {
    await req.user.removeToken(req.token)
    res.status(200).send()
  } catch (e) {
    res.status(400).send()
  }
})

app.listen(PORT, () => {
  console.log('Started on port 3000')
})

module.exports = { app }
