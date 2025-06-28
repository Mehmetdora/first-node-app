const express = require('express');
const router = express.Router();
const { homePage } = require('../controllers/HomeController');





router.get('/', homePage);

module.exports = router;
