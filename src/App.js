import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Counter from './components/Counter/ItemCount';


function App() {
  
  const stock = 10

  return (
    
    <div className="App">
      <NavBar/> 
      
      <header className="App-header">
      <ItemListContainer greeting = 'Bienvenidos'/>
      <ItemDetailContainer />
      <Counter stock={stock}/> 
      </header>
    </div>
  );
}

export default App;
