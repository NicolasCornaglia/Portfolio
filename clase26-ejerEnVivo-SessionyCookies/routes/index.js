var express = require('express');
var router = express.Router();
var { check } = require('express-validator')
var session = require('express-session')
const cookies = require('cookie-parser');
const indexController = require('../controllers/indexController')
const cookieController = require('../controllers/cookieController')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', colorDeFondo: req.cookies.backgroundColor },);
});

/* POST User data */
router.post('/registro', [
  check('nombre').isLength({min: 2}),
  check('edad') // esto estaria completo poniendo check('edad').isNumeric().withMessage('La edad debe ser un numero') pero no hace falta al poner el campo required en el formulario de la vista

] , indexController );

 router.post('/resetCookies', cookieController );


module.exports = router;
