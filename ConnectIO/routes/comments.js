const express = require('express')
const router = express.Router();
const commentsController = require('../controllers/comments_controller');
const passport = require('passport');

//adding extra security using passport.checkAuthentication() 
router.post('/create',passport.checkAuthentication, commentsController.create);

module.exports = router;