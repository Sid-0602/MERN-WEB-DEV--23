const express = require('express');
const router = express.Router();
const postAPI = require('../../../controllers/api/v1/posts_api'); //this will use post api function from post.
const passport = require('passport');

router.get('/',postAPI.index);
//authentication check using Passport JWT:
router.delete('/:id',passport.authenticate('jwt',{session: false}),postAPI.destroy);
module.exports = router;