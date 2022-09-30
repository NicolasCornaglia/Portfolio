const bcrypt = require('bcrypt');
const fs = require('fs');
let { check, validationResult, body } = require('express-validator');


const controller = {
   login: (req,res) => {
      return res.render('login');
   },
   processLogin: (req,res) => {
      let archivoUsuario = fs.readFileSync('./src/users.json', 'utf-8');
      let usuarios;
      if (archivoUsuario == "") {
         usuarios = [];
      } else {
         usuarios = JSON.parse(archivoUsuario);
      }
   
      for (let i=0; i<usuarios.length; i++) {
         if (usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
            return res.send('Usuario Logueado!')
         }
      }
      res.send('Error al loguear un usuario')
   }
}

module.exports = controller