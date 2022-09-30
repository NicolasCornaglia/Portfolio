const body = document.querySelector('body');
const h1 = document.querySelector('h1');

let darkmode = window.prompt("¿Desea modo oscuro?"); // Esto deberia ser un confirm, si respondo no funciona igual el modo oscuro...

if (darkmode) {
   body.style.backgroundColor = "#7f7f7f";
   body.classList.add('fondoMoviesList')
}

h1.innerHTML += 'LISTADO DE PELICULAS'
h1.style.color = "white";
h1.style.backgroundColor = "teal"
h1.style.padding = "20px"

