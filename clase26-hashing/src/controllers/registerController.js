const bcrypt = require('bcrypt');
const fs = require('fs');
let { check, validationResult, body } = require('express-validator');


const controller = {
   register: (req,res) => {
      return res.render('register');
   },
   processRegister: (req,res) => {
      /* console.log(req); */

      let usuario = {
         email: req.body.email,
         password: bcrypt.hashSync(req.body.password, 10)
      }

      let usersJSON = fs.readFileSync('./src/users.json', {encoding: 'utf-8'})
      let users = JSON.parse(usersJSON) // parse converts the usersJSON file to a javascrypt array

      users.push(usuario)
      let usersString = JSON.stringify(users)

      fs.writeFileSync('./src/users.json', usersString)

      res.redirect('/user/login')
   }
   
}

module.exports = controller