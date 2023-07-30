const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const passport = require('passport');

//this router is used for user profile:
//router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/profile/:id',passport.checkAuthentication,usersController.profile);

//these routers is used for user sign-in, sign-up:
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//these routes will create a user and create a session after login.
router.post('/create',usersController.create);

//to auth, use passport as middleware: 
router.post('/create-session', passport.authenticate('local',{failureRedirect : '/users/sign-in'},), usersController.createSession);

router.get('/sign-out', usersController.terminateSession); 


module.exports = router;
