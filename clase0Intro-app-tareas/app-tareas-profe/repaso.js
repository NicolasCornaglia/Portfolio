//Guía para el repaso de JavaScript
let array = ['amarillo','azul','rojo'];
console.log(array);
array.push('blanco');
console.log(array);

//Métodos I (push, pop, shift, unshift, indexOf)

console.log(array.pop());
console.log(array);
let primerElemento = array.shift();
console.log(array);
array.unshift(primerElemento);
console.log(array);
console.log();
console.log(array.indexOf('azul'));
console.log();

//Métodos II (forEach, map, filter, reduce)
array.forEach(element => {
    console.log(element);
});
console.log();

array.forEach((element,index) => {
    console.log((index+1)+" "+element);
});
console.log();


//Aqui pueden colocar el archivo json que posee nuestras tareas y así poder explicar a los alumnos para que puedan ver lo que deseamos hacer como desafío

let tareas = [
    {
     titulo: "Repasar JS",
     estado: "terminada"
    },
    {
     titulo: "Armar aplicación de Tareas",
     estado: "en progreso"
    },
    {
     titulo: "Repasar HTML",
     estado: "pendiente"
    }
];
console.log();
//Aquí les mostramos las tareas que tenemos
console.log(tareas);
console.log();
tareas.forEach((elemento, index) => {
    let indiceFix = index + 1;
    console.log(indiceFix + " - " + elemento.titulo + ": " + elemento.estado);

});

//A continuación hacemos el ejemplo para filtrar tareas
console.log("Tareas en estado pendiente");
console.log("---------------------------");

let tareasPendientes = tareas.filter((tarea) =>{
    return tarea.estado == 'pendiente';
});
console.log(tareasPendientes);
console.log();
//Ahora hacemos el ejemplo pero pasandole los otros estados para que ellos vean como los filtra
console.log("Tareas en estado en progreso");
console.log("---------------------------");
let tareasEnProgreso = tareas.filter((tarea) =>{
    return tarea.index == 'en progreso';
});
console.log(tareasEnProgreso);
console.log();
console.log("Tareas en estado terminada");
console.log("---------------------------");
let tareasTerminadas = tareas.filter((tarea)=>{
    return tarea.estado == 'terminada';
});
console.log(tareasTerminadas);
console.log();
//Ciclos: (for of , for in)
for(const tarea of tareas) {
    console.log(tarea);
}
console.log();


//Aquí pueden crear un objeto literal
let objetoLiteral = {
    nombre : "Daniel",
    apellido : "Fuentes",
    edad : 58
};
for (const key in objetoLiteral) {
   console.log(key +": "+objetoLiteral[key]);
}
console.log();

//Objeto Date
let fecha = new Date();
console.log(fecha);

//Destructuring
let objeto = {
    nombre : "Daniel",
    apellido : "Fuentes",
    edad : 53
};
let {nombre,apellido,edad} = objeto;
console.log(nombre);
console.log(apellido);
console.log(edad);

//Spread operator
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let array3 = [...array1,...array2, 11,12,13];

console.log(array3);
//end