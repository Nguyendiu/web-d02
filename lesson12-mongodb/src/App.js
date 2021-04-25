const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const cors = require('cors')
const usersRoute = require("./routes/users.route")

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors())


// what happend if connect data fail
mongoose.connect('mongodb://localhost:27017/web-d03-db', { useUnifiedTopology: true, useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(`cannot connect to mongoose : ${err.toString()}`)
  } else {
    console.log('connected db')
  }
})
app.use(express.json({ extended: false }));// hien thi trong postman

app.use('/users', (req, res, next) => {
  console.log('The request recieved at: ', new Date())
  next()
})

app.use('/users', usersRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})