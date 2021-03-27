// import modules
const fs = require('fs');


function readFileSync() {
    const content = fs.readFileSync('./src/greeting.txt');
    console.log('SYNC CONTENT: ', content.toString())
}
function readFileAsync() {
    fs.readFile('./src/greeting.txt', (err, data) => {
        if (err) throw err;
        console.log('ASYNC CONTENT: ', data.toString())
    });

}
function readFileName() {
    console.log(('FILENAME: ', __filename))
}
function readDirName() {
    console.log(('DIRNAME: ', __dirname))
}

module.exports = {
    readFileName,
    readFileSync,
    readFileAsync,
    readDirName
}