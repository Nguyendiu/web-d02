const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware 

let users = [
    {
        name: 'admin',
        pass: '123'
    },
    {
        name: 'teo',
        pass: '456'
    }
]

console.log(users[1].pass)
app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login/index.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login/login.html');
});
app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    // if (username === "admin" && password === "123") {
    //     res.send(`Dang nhap thanh cong`);

    // } else
    //     res.send(`sai tai khoan hoac mat khau`);
    for (let i = 0; i <= users.length; i++) {
        if (users[i].name === username && users[i].pass === password) {
            res.send('Login Success')

        } else {
            res.send('Check user or password')

        }
    }
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`http://localhost:${port}`));