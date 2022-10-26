import React from 'react'
import logo from './logo.svg';
/* import './App.css'; */
import TiraPeliculas from './components/TiraPeliculas';
import ContenedorPublicidad from './components/ContenedorPublicidad';


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <ContenedorPublicidad>
          <h2> Woow! Publicidad! </h2>
        </ContenedorPublicidad>
        <TiraPeliculas />
        <TiraPeliculas />
        <ContenedorPublicidad>
          <ul>
            <li> Public 1</li>
            <li> Public 2</li>
            <li> Public 3</li>
          </ul>
        </ContenedorPublicidad>
      </main>

    </div>
  );
}

export default App;
