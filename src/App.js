import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/ItemCount';


function App() {
  
  const stock = 10

  return (
    
    <div className="App">
      <NavBar/> 
      <ItemListContainer greeting = 'Bienvenidos'/>
      
      <header className="App-header">
      <Counter stock={stock}/> 
      </header>
    </div>
  );
}

export default App;
