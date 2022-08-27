import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"




function App() {
  
  return (
    
    <div className="App">
      <NavBar/>
      <h2>Bienvenidos a Bike Machine</h2> 

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
