import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';



function App() {
  
  return (
    
    <div className="App">
      <NavBar/> 
      <ItemListContainer greeting = 'Bienvenidos a Bike Machine'/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
