// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require('../controllers/userController');

// Validaciones

let userVerification = require('../../middlewares/userVerification');

router.get('/', userVerification, userController.permit);

module.exports = router;