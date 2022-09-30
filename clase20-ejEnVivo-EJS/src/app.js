const express = require('express');
const mainRoutes = require("../routes/main");
const productosRoutesApi =require("../routes/productosApi");
const productosRoutes =require("../routes/productos");  
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// rutas web que devuelven html
app.use('/', mainRoutes);
app.use('/productos', productosRoutes);

// rutas api que devuelve json
app.use('/api/productos', productosRoutesApi);

app.listen(PORT, ()=>{
   console.log(`Servidor funcionando en el puerto ${PORT}`);
});

