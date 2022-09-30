const express = require('express');
const app = express();
var logMiddleware = require('./middleware/logMiddleware');

// Configuración
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Rutas
const usersRouter = require('./routes/users');

app.get('/', (req, res) => {
    res.redirect('/users/')
});
app.use('/users', usersRouter);

// Middleware
app.use(logMiddleware);

// Servidor
app.listen(3000, () => { console.log('Servidor funcionando en el puerto 3000.') })