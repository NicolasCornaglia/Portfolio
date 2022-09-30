const express = require('express');
const router = express.Router();
/* const productosController = require('../controllers/productos.js'); */
const {agregarProducto, listar, borrarProducto} = require('../controllers/productos.js');


/* router.get('/', productosController.listar);
router.post('/', productosController.agregarProducto); */

router.get('/', listar);
router.post('/', agregarProducto);
router.delete('/:id', borrarProducto);

module.exports = router;