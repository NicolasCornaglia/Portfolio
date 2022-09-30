/* const fs = require('fs');


function userVerification(req,res,next) {
   const actualUser = req.query.user;
   let allowedUsers = ['Ada','Greta','Vim','Tim'];
      if (allowedUsers.includes(actualUser)) {
         next();
      } else {
         res.status(403).send('No tienes los privilegios para ingresar');
      }     
      
}

module.exports = userVerification; */