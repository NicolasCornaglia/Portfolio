var session = require('express-session')
const cookies = require('cookie-parser');

const controller = function (req, res, next) {

  let datos = {
    nombre: req.body.nombre,
    color: req.body.color,
    email: req.body.email,
    edad: req.body.edad,
  }

/*   req.session.name = req.body.name
  req.session.color = req.body.color
  req.session.email = req.body.email
  req.session.age = req.body.age
  if(req.body.recordar_color){
      res.cookie('color', req.body.color, {maxAge: 60 * 1000})
  }
  res.redirect('/') */ /* Implementar esto!! */


  let colorDeFondo = req.body.color;
  let expireTime = 60000;



  if (req.body.recordarColor != undefined) {
    res.cookie('backgroundColor', datos.color, { maxAge: expireTime })
    colorDeFondo = req.cookies.backgroundColor;
  }

  /* console.log(colorDeFondo); */

  res.render('ingreso', {
    title: 'Express',
    datos: datos,
    colorDeFondo: colorDeFondo
  });
}

module.exports = controller;


/* Implementar esto tambien! */
/* index: function(req, res){
  if(req.session.name){
      let data = req.session
      return res.render('index', {data})
  }
  res.render('index') */ 