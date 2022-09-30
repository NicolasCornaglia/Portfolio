const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
//const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController = {
    list: async (req, res) => {
        const movies = await db.Movie.findAll()
        res.render('moviesList.ejs', { movies: movies })
    },

    'detail': async (req, res) => {
        const movie = await db.Movie.findByPk(req.params.id, {
            include: [{ association: "genero" }, { association: "actores" }]
        });
        let parseDate = {
            year: movie.release_date.getFullYear(),
            month: ("0" + (movie.release_date.getMonth() + 1)).slice(-2),
            date: ("0" + movie.release_date.getDate().toString()).slice(-2)
        };
        res.render('moviesDetail.ejs', { movie, parseDate });
    },
    'new': async (req, res) => {
        const movies = await db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        });
        res.render('newestMovies', { movies });

    },
    'recomended': async (req, res) => {
        const movies = await db.Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 }
            },
            order: [
                ['rating', 'DESC']
            ]
        });
        res.render('recommendedMovies.ejs', { movies });

    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: async function (req, res) {
        const generos = await Genres.findAll({ raw: true });

        return res.render('moviesAdd.ejs', { allGenres: generos });
    },
    create: async function (req, res) {
        await Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        });
        res.redirect('/movies');
    },
    edit: async function (req, res) {
        const pedidoPelicula = Movies.findByPk(req.params.id, { raw: true });
        const pedidoGeneros =  Genres.findAll({ raw: true });

        const [pelicula, generos] = await Promise.all([pedidoPelicula, pedidoGeneros])
        res.render('moviesEdit.ejs', { Movie: pelicula, allGenres: generos });
    },
    update: async function (req, res) {
        const {title, rating, awards, release_date, length, genre_id } = req.body;
        await Movies.update({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/movies');
    },
    delete: async function (req, res) {
        const movie = await Movies.findByPk(req.params.id, { raw: true });
        res.render('moviesDelete.ejs', { Movie: movie });
    },
    destroy: async function (req, res) {
        await Movies.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/movies');
    }
}

module.exports = moviesController;