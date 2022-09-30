const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
/*    list: (req, res) => {
      db.Genre.findAll()
         .then(genres => {
            return res.status(200).json({
               meta: {
                  status: 200,
                  total: genres.length,
                  url: req.originalUrl
               }
            })
         })
   }, */
   list: async (req,res) => {
      const genres = await db.Genre.findAll();
      let respuesta = {
         meta: {
            status: 200,
            total: genres.length,
            url: req.originalUrl
         },
         data: genres
      }
      res.json(respuesta)
   },
/*    detail: (req, res) => {
      db.Genre.findByPk(req.params.id)
         .then(genre => {
            return res.status(200).json({
               data: {
                  id: genre.id,
                  name: genre.name,
                  ranking: genre.ranking,
                  active: genre.active,
                  created_at: genre.createdAt,
                  updated_at: genre.updatedAt
               }
             })
         });
   }, */
   detail: async (req,res) => {
      const genresDetail = await db.Genre.findByPk(req.params.id);
      let respuesta;
      if (!genresDetail) {
         let respuesta = {
            meta: {
               status: 400,
               url: req.originalUrl
            },
            message: "ID no encontrado"
         }
         res.status(400).json(respuesta)
      } else {
      let respuesta = {
         meta: {
            status: 200,
            url: req.originalUrl
         },
         data: genresDetail
      }
      res.json(respuesta)
      }
   }
}

module.exports = genresController;