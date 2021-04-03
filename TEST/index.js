const express = require('express');

//create express app
const app = express();

//setup server port
const port = process.env.PORT || 8080

// define root routes
app.get('/', (req, res) => {
    res.send('hellDuy');
});
// import data router
const dataRouter = require('./src/routes/data.routes');

// create Router

// listen to the Port
app.listen(port, () => {
    console.log(`Express Server is running at http://localhost:${port}`);
});