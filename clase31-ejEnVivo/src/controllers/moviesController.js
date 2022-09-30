let db = require('../database/models');

let controller = {
   list: (req, res) => {
      db.Movies.findAll()
         .then((movies) => {
            res.render("moviesList", { movies: movies})
         })
   } ,
   new: (req, res) => {
      db.Movies.findAll({
         order: [["release_date", "DESC" ]]
      })
         .then((movies) => {
            res.render("moviesList", { movies: movies })
         }) 
   },
   detail: (req,res) => {
      db.Movies.findByPk(req.params.id)
         .then( (movie) => {
            res.render("moviesDetail", {movie: movie})
         } )
   },
   recomended: (req,res) => {
      db.Movies.findAll({
         order: [["release_date", "DESC" ]],
         limit: 5
      })
         .then((movies) => {
            res.render("recommendedMovies", { movies: movies })
         }) 
   }

}
module.exports = controller;