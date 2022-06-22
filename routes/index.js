const express = require('express');
const router = express.Router();

// all request which starts with '/' will be handled by home
router.use('/', require('./home'));

module.exports = router;