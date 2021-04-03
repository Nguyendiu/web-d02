const express = require('express')
const router = express.Router()

const usersController = require('../controller/users.controller')
router.get('/', usersController.getUsers)

router.get('/:id', usersController.getUserById)

router.post('/', usersController.createUser)
router.delete('/', usersController.removeUser)
router.put('/:id', usersController.updateUser)

module.exports = router