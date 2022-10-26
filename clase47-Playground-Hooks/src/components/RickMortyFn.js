import { useState, useEffect, useRef } from 'react'

function RickMortyFn() {
   const [personajes, setPersonajes] = useState([]);
   const [pagina, setPagina] = useState(1);

   const subtitle = useRef();

   useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
         .then(response => response.json())
         .then(data => {
            setPersonajes(data.results)
         })
         .catch(error => console.error(error));
   }, [])

   useEffect(() => {
      console.log('%cse actualizo el componente', 'color: green')
   }, [personajes])

   useEffect(() => {
      return () => console.log('%cse desmonto el componente', 'color: red')
   }, [])

   const cargarMas = async () => {
      await setPagina(pagina + 1)
      console.log(pagina)
      console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`)

      fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
         .then(response => response.json())
         .then(data => {
            setPersonajes(data.results);
         })
         .catch(error => console.error(error))
   }

   const cambiarh2 = () => {
      subtitle.current.style.color = "red";
      subtitle.current.innerText = "Lo cambiamos con useRef"
   }

   return (
      <div>
         <h2 ref={subtitle} >Soy el componente Rick and Morty Function</h2>
         <button onClick={cambiarh2}>Cambiar al H2</button>

         <ul>
            {personajes.length === 0 && <p>Cargando</p>}
            {
               personajes.map((personaje, i) => {
                  return (
                     <li key={i}>
                        <h3>{personaje.name}</h3>
                        <img src={personaje.image} alt='avatar' width='150' />
                     </li>
                  )
               })
            }
            <button onClick={cargarMas}>Siguiente Página</button>
         </ul>
      </div>
   )
}

export default RickMortyFn