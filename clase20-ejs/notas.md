npm init -y
npm install express --save
npm install ejs --save


app.set("view engine", "ejs");
app.use(express.static('public')); // para poder visualizar imagenes