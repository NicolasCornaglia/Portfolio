const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Ejecuto el llamado a mis rutas
const indexRouter = require('./src/routes/index');
const moviesRoutes = require('./src/routes/moviesRoutes');
const genresRoutes = require('./src/routes/genresRoutes');
const apiMovieRoutes = require('./src/routes/api/moviesRouter');
const apiGenresRoutes = require('./src/routes/api/genresRouter');

//Aquí pueden colocar las rutas de las APIs
app.use('/api/movies', apiMovieRoutes);
app.use('/api/genres', apiGenresRoutes);

// view engine setup
app.set('views', path.resolve(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
