const sw = require('./funcionesDeTareas');


let accion = process.argv[2];
let titulotarea = process.argv[3];

sw(accion,titulotarea);

