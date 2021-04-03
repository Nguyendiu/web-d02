const mysql = require('mysql')

// create data conection
const dataSql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ' node_mysql_crud_db'
})
dataSql.connect(function (err) {
    if (err) throw err;
    console.log('Database successfull')
})
module.exports = dataSql