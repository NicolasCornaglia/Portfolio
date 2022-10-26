import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import FrutasVersionClase from './components/FrutasVersionClase'
import FrutasVersionFuncion from './components/FrutasVersionFuncion';
import Home from './components/Home'
import RickMortyClass from "./components/RickMortyClass"
import RickMortyFn from "./components/RickMortyFn"

function App() {
  return (
    <div className="App">
      {/* <FrutasVersionClase/> */}
      <FrutasVersionFuncion/>

  {/* ------------------------------------------------------------- */}

      <Link to="/">Home</Link>
      <Link to="rick-morty">Rick and Morty</Link>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/rick-morty" component={RickMortyFn}/>
      
    </div>
  );
}

export default App;
