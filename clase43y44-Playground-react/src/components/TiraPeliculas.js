import React from 'react';
import Pelicula from './Pelicula'

function TiraPeliculas() {
   return (
      <div>
         <Pelicula generos = {["Fantasia", "Aventura"]}  titulo="Harry Potter I" rating="9.1"/>
         <Pelicula generos = {["Fantasia", "Aventura"]}  titulo="Harry Potter II" rating="9.2"/>
         <Pelicula generos = {["Fantasia", "Aventura"]}  titulo="Harry Potter III" />
         <Pelicula   titulo="Harry Potter IV" rating="9.5"/>
         <Pelicula generos = {["Fantasia", "Aventura"]}  titulo="Harry Potter V" rating="9.9"/>
     </div>
   );
 }


export default TiraPeliculas;