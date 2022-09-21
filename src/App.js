import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path='/' element={<ItemListContainer /> } />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
      </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
