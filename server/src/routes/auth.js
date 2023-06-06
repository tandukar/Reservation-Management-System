const express = require('express');
const router = express.Router();
const userController = require('../controllers/authController');

router.post('/login', userController.login);


module.exports = router;