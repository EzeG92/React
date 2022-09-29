import './NavBar.css';
import logo from '../../images/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    
    return (
    <>
    <div className='navbar'>
        <div>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" className='logo' />
            </NavLink>
            
        </div>
        <div className='menu'>
            <ul>
                <li>
                    <NavLink to={'/'} >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/category/cintas'}
                    style ={({isActive}) => 
                    isActive 
                        ? {color: 'black'}
                        : {color: 'white'} } 
                        >
                        Cintas
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/category/bicis'}
                    style ={({isActive}) => 
                    isActive 
                        ? {color: 'black'}
                        : {color: 'white'} } 
                        >
                        Bicis
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/category/elipticos'}
                    style ={({isActive}) => 
                    isActive 
                        ? {color: 'black'}
                        : {color: 'white'} } 
                        >
                        Elipticos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/category/bancos'}
                    style ={({isActive}) => 
                    isActive 
                        ? {color: 'black'}
                        : {color: 'white'} } 
                        >
                        Bancos
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to={'/category/accesorios'}
                    style ={({isActive}) => 
                    isActive 
                        ? {color: 'black'}
                        : {color: 'white'} } 
                        >
                        Accesorios
                    </NavLink>
                </li>

            </ul>
        </div>
        <div className='carrito2'>
        <Link to='cart'>
            <CartWidget />
        </Link>
        </div>
    </div>
    </>

    )
    
}

export default NavBar;

