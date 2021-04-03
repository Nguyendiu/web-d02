const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path");

const app = express();

dotenv.config({ path: 'config.env' })
const port = process.env.port || 8080

app.get('/', (req, res) => {
    // res.send('Crud application');
    res.render("index")
})
// log requests
app.use(morgan('tiny'));

// request body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "ejs", "html")
// app.set('view', path.resolve(__dirname, "views/ejs"))

// load asset
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})