let express = require('express');
let app = express();
const PORT = 3000;
const path = require('path');
const homeRoutes = require("./routes/home");
const detalleRoutes = require("./routes/detalle");
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./views"));
/* app.use(express.static('public')); // para poder visualizar imagenes */

app.use('/', homeRoutes);
app.use('/detalle', detalleRoutes);

app.listen(PORT, ()=>{
   console.log(`Servidor funcionando en el puerto ${PORT}`);
});

