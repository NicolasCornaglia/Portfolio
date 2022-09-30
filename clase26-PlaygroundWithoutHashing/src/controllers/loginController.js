const bcrypt = require('bcrypt');
const fs = require('fs');
let { check, validationResult, body } = require('express-validator');


const controller = {
   login: (req,res) => {
      return res.render('login');
   },
   processLogin: (req,res) => {
      let errors = validationResult(req);
      /* console.log(errors.errors); */
      if (errors.isEmpty()) {
         let usersJSON = fs.readFileSync('./src/users.json', {encoding: 'utf-8'})
         let users;
         
         if (usersJSON == "") {
            users = [];
         } else {
            users = JSON.parse(usersJSON);
         }

         let usuarioALoguearse
         for (let i=0; i<users.length; i++) {
            if (users[i].email == req.body.email) { // Without Hashing
               if (req.body.password == users[i].password) {
                  usuarioALoguearse = users[i];
                  break;
               }
            }
         }
         if (usuarioALoguearse == undefined) {
            return res.render('login', {errors: [{msg: 'Credenciales invalidas'}]});
         }

         req.session.usuarioLogueado = usuarioALoguearse;

         if (req.body.recordame != undefined) {
            res.cookie('recordame', usuarioALoguearse.email, { maxAge: 60000 });
         }

         res.send('success!');
      } else {
         return res.render('login', {errors: errors.errors});
      } 

   }
   
}

module.exports = controller