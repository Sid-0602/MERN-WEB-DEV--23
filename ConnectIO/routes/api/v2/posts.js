const express = require('express');
const router = express.Router();
const postAPI = require('../../../controllers/api/v2/posts_api');

router.get('/',postAPI.index);

module.exports = router;