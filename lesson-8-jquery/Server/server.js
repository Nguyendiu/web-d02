const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware 

const users = [{
    name: 'admin',
    password: '123'
}]
console.log(users.name)
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
    if (username === "admin" && password === "123") {
        res.send(`Dang nhap thanh cong`);

    } else
        res.send(`sai tai khoan hoac mat khau`);
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`http://localhost:${port}`));