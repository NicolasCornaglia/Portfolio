const db = require('../../database/models');
const sequelize = db.sequelize;


const movieController = {
   list: (req, res) => {
      db.Movie
         .findAll()
         .then(movies => {
            return res.status(200).json({
               total: movies.length,
               data: movies,
               status: 200,
            })
         })
   },
   store: async (req, res) => {
      const movie = await db.Movie.create(req.body);
      let respuesta = {
         meta: {
            status: 200,
            created: 'ok',
            url: req.originalUrl
         },
         data: movie
      }
      res.status(200).json({ respuesta })
   },
/*    store: (req, res) => {
      db.Movie
         .create(req.body)
         .then(movie => {
            return res.status(200).json({
               data: movie,
               status: 200,
               created: 'ok'
            })
         })
   }, */
   /*    delete: (req, res) => {
         db.Movie.destroy({
            where: {
               id: req.params.id
            }
         })
            .then(response => {
               return res.status(200).json({
                  data: response,
                  idPeliculaEliminada: req.params.id  
               })
            })
      }, */

   delete: async (req, res) => {
      let deleted = await db.Movie.destroy({
         where: {
            id: req.params.id
         }
      })
      let respuesta = {
         meta: {
            status: 200,
            url: req.originalUrl
         },
         data: deleted
      }
      res.json(respuesta)
   }
}

module.exports = movieController;