const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("Router is loaded");

//connecting to controller "home_controller": 
router.get('/',homeController.home);


router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));
router.use('/likes',require('./likes'));

router.use('/api',require('./api')); //this is entry point for all api routes.


module.exports = router;