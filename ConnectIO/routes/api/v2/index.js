//this is entry point for v2 post APIs: 

const express = require('express');
const router = express.Router();


router.use('/posts',require('./posts'));

module.exports = router;