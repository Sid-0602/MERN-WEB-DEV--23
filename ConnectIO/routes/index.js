const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home_controller');

console.log("Router is loaded");

//connecting to controller "home_controller": 
router.get('/',HomeController.home)


module.exports = router;