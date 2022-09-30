const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const { body } = require('../controllers/usersController');

// Todos los usuarios
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
router.post('/', controller.store);

// Detalle de un usuario
router.get('/:id', controller.show);

// Middleware

   // Validaciones

const validateCreateForm = [
   body('first_name' /* first_name es el name de uno de los items de un form */).notEmpty().withMessage('Debes completar el campo de nombre'),
   body('last_name').notEmpty().withMessage('Debes completar el campo de nombre'),
   body('email').isEmail().withMessage('Debes completar un email valido')
] 

   // registro de logs

let logDBMiddleware = require('./middlewares/logDBMiddleware');

router.post('/register',logDBMiddleware ,usersController.store);


module.exports = router;