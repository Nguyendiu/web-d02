const express = require('express')
const bodyParser = require("body-parser");
const path = require('path')

const usersRoute = require("./server/routes/users.route")

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client')))

app.use('/users', usersRoute)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "client", "login.html"))

})
app.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname, "client", "main.html"))

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})