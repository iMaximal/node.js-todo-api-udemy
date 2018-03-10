const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aa3a6a4a6cb3eba65f94daa'),
  // }, {
  //   $set: {
  //     completed: true,
  //   },
  // }, {
  //   returnOriginal: false,
  // })
  //   .then((result) => {
  //     console.log(result)
  //   })

  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('5aa3af80a6cb3eba65f94f65') },
    {
      $set: {
        name: 'Max',
      },
      $inc: {
        age: -5,
      },
    },
    { returnOriginal: false }
  )
    .then((result) => {
      console.log(result)
    })

  // client.close()
})
