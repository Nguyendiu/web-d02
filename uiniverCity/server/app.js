const bodyParser = require('body-parser');
var express = require('express');
const path = require('path')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client')))
// var router = express.Router();
let users = [
    {
        email: 'admin',
        password: '123'
    },
    {
        email: 'teo',
        password: '456'
    },
    {
        email: 'ti',
        password: '789'
    }
]
module.exports.getUsers = (req, res) => {
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })
}

app.use(bodyParser());

console.log(users)
const port = 3000
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../client", "index.html"))

})
app.post('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, "../client", "signup.html"))
})
app.post('/main', function (req, res) {
    var body = req.body;
    var email = body.email;
    var password = body.password;
    console.log(body);
    console.log('email:' + email)
    console.log('pass:' + password)
    // const user = users.find(user => user.email === email)
    // if (!!!user) {
    //     res.send('kiem tra lai')
    // }
    // let index = users.indexOf(email)
    // users[index] = { email, password }
    // res.sendFile(path.join(__dirname, "views", "main.html"))
    if (!email || !password) {
        return res.send('kiem trai lai tai khoan')
    }
    const user = users.find(user => user.email === email)
    if (!user) {
        return res.status(400).json({
            message: "email khong ton tai"
        })
    }

    if (user.password === password) {
        return (
            res.sendFile(path.join(__dirname, "../client", "main.html"))
        )

    }
    if (user.password !== password) {
        return (
            res.status(400).json({
                message: 'pass sai'
            })
        )
    }


});

var router = require('./users.router.js');

//both index.js and things.js should be in same directory
app.use('/server/users.router', router);
app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})