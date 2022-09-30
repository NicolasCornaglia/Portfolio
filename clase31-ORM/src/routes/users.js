// ************ Require's ************
const express = require('express');
const router = express.Router();
let { check, validationResult, body } = require('express-validator');


// ************ Controller Require ************
const loginController = require('../controllers/loginController');

// Middlewares
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');

// ruteo

// falta la pagina de register la cual no nos dieron en el video, donde usariamos el middleware de guest

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




