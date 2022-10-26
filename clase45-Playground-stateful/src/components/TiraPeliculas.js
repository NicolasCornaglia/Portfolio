import React, { Component } from 'react';
import Pelicula from './Pelicula'


class TiraPeliculas extends Component {

   lanzarAlerta() {
      alert('Me clickeaste!')
   }

   cambiarAmarillo() {
      document.querySelector('body').style.backgroundColor = 'Yellow'
   }

   cambiarRosa() {
      document.querySelector('body').style.backgroundColor = 'Pink'
   }

   render() {
      return (
         <div onClick={ this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarRosa}>
            <Pelicula generos={["Fantasia", "Aventura"]} titulo="Harry Potter I" rating="9.1" />
            <Pelicula generos={["Fantasia", "Aventura"]} titulo="Harry Potter II" rating="9.2" />
            <Pelicula generos={["Fantasia", "Aventura"]} titulo="Harry Potter III" rating="10"/>
            <Pelicula titulo="Harry Potter IV" rating="9.5" />
            <Pelicula generos={["Fantasia", "Aventura"]} titulo="Harry Potter V" rating="9.9" />
         </div>
      );
   }
}


export default TiraPeliculas;