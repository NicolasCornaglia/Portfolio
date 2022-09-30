const express = require('express');
const router = express.Router();

const {detalle, obtenerPorId} = require('../controllers/detalleController');

router.get('/', detalle);
router.get('/:id', obtenerPorId);


module.exports = router;