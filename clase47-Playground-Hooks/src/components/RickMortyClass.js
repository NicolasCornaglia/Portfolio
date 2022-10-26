import React, {Component} from 'react';

class RickMortyClass extends Component {
   constructor() {
      super();
      this.state = {
         personajes: [],
         pagina: 1,
      }
   }

   componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
         .then(response => response.json())
         .then(data => {
            this.setState({
               personajes: data.results
            })
         })
         .catch(error => console.error(error));
   }

   componentDidUpdate() {
      console.log('%cse actualizo el componente', 'color: green')
   }

   componentWillUnmount() {
      console.log('%cse desmonto el componmente', 'color: orange')
   }

   cargarMas = async () => {
      await this.setState({pagina: this.state.pagina + 1})
      console.log(this.state.pagina)
      console.log(`https://rickandmortyapi.com/api/character?page=${this.state.pagina}`)

      fetch(`https://rickandmortyapi.com/api/character?page=${this.state.pagina}`)
         .then(response => response.json())
         .then(data => {
            this.setState({
               personajes: data.results
            })
         })
         .catch(error => console.error(error))
   }

   render () {
      return (
         <div>
            <h2>Soy el cokponente Rick and Morty Class</h2>
            <ul>
               {this.state.personajes.length === 0 && <p>Cargando</p>}
               {
                  this.state.personajes.map((personaje,i) => {
                     return (
                        <li key={i}>
                           <h3>{personaje.name}</h3>
                           <img src={personaje.image} alt='avatar' width='150'/>
                        </li>
                     )
                  })
               }
               <button onClick={this.cargarMas}>Siguiente Página</button>
            </ul>
         </div>
      )
   }
}

export default RickMortyClass;