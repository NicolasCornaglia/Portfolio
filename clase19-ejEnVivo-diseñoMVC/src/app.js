const express = require('express');
const mainRoutes = require("../routes/main");
const productosRoutes =require("../routes/productos"); 
const app = express();
const PORT = 3000;


app.listen(PORT, ()=>{
   console.log(`Servidor funcionando en el puerto ${PORT}`);
});

app.use('/', mainRoutes);
app.use('/productos', productosRoutes);




