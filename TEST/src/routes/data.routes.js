const express = require('express') // import express    
const router = express.Router(); // router


const dataController = require('../controller/controller') // import file controller

//get all data
router.get('/', dataController.getData) // getData in controller

module.exports = router;