var session = require('express-session')
const cookies = require('cookie-parser');

const controller = function (req, res, next) {

   let datos = {
     nombre: req.body.nombre,
     color: req.body.color,
     email: req.body.email,
     edad: req.body.edad,
   }
 
   let colorDeFondo = '#ffffff';
 
   if (req.body.recordarColor != undefined) {
    res.cookie('backgroundColor', '#ffffff', {maxAge: 60000 })
    colorDeFondo = req.cookies.backgroundColor;
   }
 

   res.render('index', {
     title: 'Express',
     datos: datos,
     colorDeFondo: colorDeFondo
   });
}

module.exports = controller;