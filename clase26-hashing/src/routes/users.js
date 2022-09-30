// ************ Require's ************
const express = require('express');
const router = express.Router();
let { check, validationResult, body } = require('express-validator');


// ************ Controller Require ************
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

// Middlewares
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');

// ruteo

// en la pagina de register usariamos el middleware de guest
router.get('/register', registerController.register);
router.post('/register', registerController.processRegister)

router.get('/login', loginController.login);
router.post('/login', [
   check('email').isEmail().withMessage('Email Invalido'),
   check('password').isLength({min: 8}). withMessage('La contraseña es invalida')
], loginController.processLogin);

router.get('/check', function(req,res) {
   if (req.session.usuarioLogueado == undefined) {
      res.send("No estas logueado");
   } else {
      res.send("El usuario loguieado es: " + req.session.usuarioLogueado.email);
   }
});

module.exports = router;




