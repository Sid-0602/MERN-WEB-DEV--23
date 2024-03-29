const express = require('express')
const router = express.Router();
const postsController = require('../controllers/posts_controller');
const passport = require('passport');

//adding extra security using passport.checkAuthentication() 
router.post('/create',passport.checkAuthentication,postsController.create);

//route for deleting post.
router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);



module.exports = router;