const dataSql = require('../../config/db.config');
var dbConfig = require('../../config/db.config');

var Employee = (Employee) => {
    this.name = employee.name;
    this.age = employee.age;
    this.title = employee.tile;
    this.content = employee.content;
    this.auth = employee.auth;
    this.create_at = new Date();
    this.update_at = new Date();
}

//get all employee 
Employee.getAllEmployees = (result) => {
    dbConfig.query('Select * form Employee', (err, res) => {
        if (err) {
            console.log('err while fetch data Employee')
        } else {
            console.log('Success')
            result(null, res)
        }
    })
}

module.exports = Employee;