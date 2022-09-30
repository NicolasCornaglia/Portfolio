let db = require('../database/models');


let controller = {
   list: (req, res) => {
      db.Movies.findAll()
         .then((movies) => {
            res.render("moviesList", { movies: movies })
         })
   },
   new: (req, res) => {
      db.Movies.findAll({
         order: [["release_date", "DESC"]]
      })
         .then((movies) => {
            res.render("moviesList", { movies: movies })
         })
   },
   detail: (req, res) => {
      db.Movies.findByPk(req.params.id)
         .then((movie) => {
            res.render("moviesDetail", { movie: movie })
         })
   },
   recomended: (req, res) => {
      db.Movies.findAll({
         order: [["release_date", "DESC"]],
         limit: 5
      })
         .then((movies) => {
            res.render("recommendedMovies", { movies: movies })
         })
   },
   add: (req, res) => {
      res.render("moviesAdd")
   },
   create: (req, res) => {
      db.Movies.create({
         title: req.body.title,
         rating: req.body.rating,
         awards: req.body.awards,
         release_date: req.body.release_date,
         length: req.body.length
      })
      res.redirect('/movies')
   },
   edit: (req, res) => {
      db.Movies.findByPk(req.params.id)
         .then((movie) => { res.render('moviesEdit', { Movie: movie }) })
   },
   update: (req, res) => {
      db.Movies.update({
         title: req.body.title,
         rating: req.body.rating,
         awards: req.body.awards,
         release_date: req.body.release_date,
         length: req.body.length
      },
         {
            where:
               { id: req.params.id }
         })
         .then(() => { res.redirect('/movies') })
   },
   showDelete: (req, res) => {
      db.Movies.findByPk(req.params.id)
         .then((movie) => {
            res.render("moviesDelete", { Movie: movie })
         })
   },
   destroy: (req, res) => {
      db.Movies.destroy({
         where: { id: req.params.id }
      })
         .then(() => { res.redirect('/movies') })
   }
}
module.exports = controller;

// list: async (req.res) => { const movies = await db.Movies.findAll(); res.render('moviesList.ejs', {movies})}