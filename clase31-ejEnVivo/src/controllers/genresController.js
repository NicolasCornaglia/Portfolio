let db = require('../database/models');

let controller = {
   list: (req, res) => {
      db.Genres.findAll()
         .then((genres) => {
            res.render("genresList", { genres: genres})
         })
   },
   detail: (req,res) => {
      db.Genres.findByPk(req.params.id)
         .then( (genre) => {
            res.render("genresDetail", {genre: genre})
         } )
   }

}
module.exports = controller;