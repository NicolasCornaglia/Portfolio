import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Pelicula.css'

class Gif extends Component {
   constructor(props) {
      super(props);
      this.state = {
         gif: ""
      }
   }

   apiCall(url, consecuencia) {
      fetch(url)
         .then(response => response.json())
         .then( data => consecuencia(data))
         .catch(error => console.log(error))
   }

   traerGifNuevo() {
      this.apiCall("https://api.giphy.com/v1/gif/random?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&tag=&rating=G", this.mostrarGif)
   }


   contentDidMount() {
      console.log("Me monte!");
      this.traerGifNuevo()
   }

   mostrarGif = (data) => {
         this.setState(
            {
               gif: data.data.image_url
            }
         )
   }

   contentDidUpdate() {
      console.group("Me actualice");
      alert("Tengo un gif nuevo")
   }



   render () {
      console.log("Estoy renderizando")
      let contenido;
   
      if (this.state.gif == "") {
         contenido = <p>Cargando...</p>
      } else {
         contenido = <img src={this.state.gif}></img>
      }

      return (
         <div>
            {contenido}
            <button onClick={() => this.traerGifNuevo()}> Random Gif!</button>
         </div>
      )
   }
   // esto se encuentra bien codeado pero el gif random no funciona por lo tener los
   // permisos del random gif generator que llama la api con la url
}


export default Gif;