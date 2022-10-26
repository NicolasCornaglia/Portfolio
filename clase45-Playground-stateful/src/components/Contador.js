import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Pelicula.css'

class Contador extends Component {
   constructor(props) {
      super(props);
      this.state = {
         numero: props.inicial 
      }
   }

   incrementar() {
      this.setState({ numero: this.state.numero + 1})
   }

   decrementar() {
      this.setState({ numero: this.state.numero - 1})
   }

   render () {
      return (
         <div>
            <p>Soy el número {this.state.numero} </p>
            <button onClick={() => this.incrementar()}>Incrementar</button>
            <button onClick={() => this.decrementar()}>Decrementar</button>
         </div>
      )
   }

}


export default Contador;