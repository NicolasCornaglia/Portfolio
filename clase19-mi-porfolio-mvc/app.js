const express = require('express');
const app = express();
const mainRoute = require("./routes/main");
const aboutRoute = require("./routes/about");
const path = require('path');
const publicPath = path.resolve(__dirname, "./public");
const PORT = 3000;


app.use(express.static(publicPath));

app.use('/', mainRoute);
app.use('/about', aboutRoute);

app.listen(PORT, ()=>{
   console.log(`Servidor funcionando en el puerto ${PORT}`);
});

