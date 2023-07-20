const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

//this router is used for user profile:
router.get('/profile',usersController.profile);

//these routers is used for user sign-in, sign-up:
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);




module.exports = router;