window.onload = async function() {

   let response = await fetch(`http://localhost:3031/api/movies/:id`);
   let pelicula = await response.json();
   let data = pelicula.data;
   alert('funciona!') 
// Codigo que debemos usar para mostrar los datos en el frontend
   const displayMovieTitle = document.querySelector('#title')

   // La idea seria, agregar a la etiqueta de input el value="displayMovieTitle", asi ya esta ahi

}