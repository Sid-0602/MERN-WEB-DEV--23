const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

//this router is used for user profile:
router.get('/profile',usersController.profile);

//these routers is used for user sign-in, sign-up:
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//these routes will create a user and create a session after login.
router.post('/create',usersController.create);
router.post('/create-session',usersController.createSession);

router.post('/sign-out',usersController.signOut);


module.exports = router;