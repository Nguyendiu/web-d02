const EmployeeModel = require('../models/model')

exports.getData = (req, res) => {
    console.log('data here')
    EmployeeModel.getAllEmployees((err, employee) => {
        console.log('employee here')
    })
}