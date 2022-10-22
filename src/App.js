import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import HeaderDos from './components/headerdos/HeaderDos';
import Contador from './components/contador/Contador';
import { Control }  from './components/control/Control';
import { CambioEstilo } from './components/cambioestilo/CambioEstilo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />     
        <CambioEstilo></CambioEstilo>
        <Control></Control>   
        <HeaderDos></HeaderDos>  
        <Contador />
      </header>
    </div>
  );
}

export default App;
