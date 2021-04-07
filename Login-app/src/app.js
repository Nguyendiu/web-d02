const express = require('express')
const bodyParser = require("body-parser")

const usersRoute = require("./server/routes/users.route")

const app = express()
const port = 8080

app.use(bodyParser.json())

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