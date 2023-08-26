const express = require('express');
const router = express.Router();
const postAPI = require('../../../controllers/api/v1/posts_api'); //this will use post api function from post.

router.get('/',postAPI.index);
module.exports = router;