import './NavBar.css';
import Cart from '../Carrito/CartWidget';


const NavBar = () => {
    
    return (
    
    <div className="menu">
        
        <nav>
            <ul>
                <li><a href="." className='ini'>Inicio </a></li>
                <li><a href=".">Productos</a></li>
                <li><a href=".">Quienes somos</a></li>
                <li><a href=".">Como comprar</a></li>
                <li><a href=".">Contacto</a></li>
                <Cart/>
            </ul>
        </nav>
    </div>
    )
    
}

export default NavBar;

