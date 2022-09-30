const fs = require('fs');
const { traceDeprecation } = require('process');

function leerJSON() {
   let tareasJSON = JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));
   return tareasJSON
}
module.exports = leerJSON;
//console.log(leerJSON());
//console.log(fs.readFileSync('tareas.json', 'utf-8'))

 function sw(accion,titulotarea) {
   switch (accion) {
      case 'listar':
         leerJSON().forEach(function(elemento,i) {
         console.log(i+1,". ",elemento.titulo)})         
         break;
    case undefined:
         console.log('Atención - Tienes que pasar una acción.');
         break;
    case 'crear':
         let tareaobject = {titulo: titulotarea, estado:"pendiente"};
         guardarTarea(tareaobject);
         break;
    case 'filtrar':
         let estadoTarea = titulotarea;
         console.log(filtrarPorEstado(estadoTarea));
         break;
    default: 
         console.log('No entiendo qué quieres hacer. Escribe "listar" para obtener la lista de tareas.')   
   } 
} 


function escribirJSON(arr) {
   let arrString = JSON.stringify(arr)
   return fs.writeFileSync("./tareas.json",arrString); 
}
module.exports = escribirJSON;
//console.log(escribirJSON([{titulo:"Repasar JS1", estado:"finalizado"},{titulo:"Repasar JS2", estado:"en proceso"}]));


function guardarTarea(tareaOBJ) {
   let tareasAnteriores = leerJSON();
   let tareasTotales = [...tareasAnteriores,tareaOBJ];
   return escribirJSON(tareasTotales);
}
module.exports = guardarTarea;
//guardarTarea({titulo:"Hacer Tesina", estado:"en proceso"}); FUNCIONA!!!


function filtrarPorEstado(estadoBuscado) {
   tareas = leerJSON();
   let tareasFiltradas = tareas.filter(function(elementotareas){
      return  elementotareas.estado == estadoBuscado;
   });
   let tareasFiltradasTitulos = []
   tareasFiltradas.forEach(function(elemento) {
         return tareasFiltradasTitulos.push(elemento.titulo)})
   
   return tareasFiltradasTitulos
}

module.exports = filtrarPorEstado;
//console.log(filtrarPorEstado('pendiente')); //FUNCIONA

module.exports = sw;
