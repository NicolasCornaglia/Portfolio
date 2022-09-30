function recordameMiddleware(req, res, next) {
   if (req.cookies.recordame != undefined && req.session.usuarioALoguearse == undefined) {
      let usersJSON = fs.readFileSync('./src/users.json', { encoding: 'utf-8' })
      let users;

      if (usersJSON == "") {
         users = [];
      } else {
         users = JSON.parse(usersJSON);
      }

      let usuarioALoguearse;
      for (let i = 0; i < users.length; i++) {
         if (users[i].email == req.cookies.recordame) {
            usuarioALoguearse = users[i];
            break;
         }
      }     
   req.session.usuarioLogueado = usuarioALoguearse;
   }
   next();
}

module.exports = recordameMiddleware;