// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
/* const mainController = require('../controllers/mainController');

// Validaciones

let logMiddleware = require('../../middlewares/userLogs');

router.get('/', logMiddleware, mainController.index); */
router.get('/pruebaSession', function(req,res) {
   if (req.session.numeroVisitas == undefined) {
      req.session.numeroVisitas = 0;
   } 
   req.session.numeroVisitas++;

   res.send('Session tiene el numero: ' + req.session.numeroVisitas)
})

router.get('/mostrarNumeroSession', function(req,res) {res.send('Session tiene el numero: ' + req.session.numeroVisitas)})
module.exports = router;
