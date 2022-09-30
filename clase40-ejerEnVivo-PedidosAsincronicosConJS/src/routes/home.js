const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const detailController = require('../controllers/detailController'); 

router.get('/', homeController.display);
router.get('/:id', detailController.display)

module.exports = router;