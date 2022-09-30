// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// Validaciones

let logMiddleware = require('../../middlewares/userLogs');

router.get('/', logMiddleware, mainController.index);


module.exports = router;