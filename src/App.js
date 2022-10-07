import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';




function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path='/' element={<ItemListContainer /> } />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='cart' element={<Cart /> } />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </CartProvider>
  );
}

export default App;
