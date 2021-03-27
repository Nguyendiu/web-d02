// import modules

const http = require('http');

const modules = require('./modules');



const hostname = '127.0.0.1';
const port = 3000;


// CREATE SERVER
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World asdasd');
});

server.listen(port, hostname, () => {
    // console.log(`Server running at http://${hostname}:${port}/`);
    console.log('START')
    //BLOCKING
    modules.readFileSync()
    //BLOCKING
    modules.readFileAsync()
    modules.readFileName()
    console.log('END')
});