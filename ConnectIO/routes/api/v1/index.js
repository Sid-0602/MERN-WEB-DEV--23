//this is index file for v1 of api. 

const express = require('express');
const router = express.Router();

//this will redirect to Post API route. 
router.use('/posts',require('./posts'));

module.exports = router;