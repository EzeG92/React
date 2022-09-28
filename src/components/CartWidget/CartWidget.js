
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import carrito from '../../images/carrito.png';
import './CartWidget.css';
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react';


const CartWidget = () => {

        const {cart} = useContext(CartContext);
        const {totalItemCart} = useContext(CartContext);

    return (
        <div>
            {cart.length === 0 ? ('') : (
                <>
                <Button variant="primary" >
                    <img src={carrito} alt="carrito de compras" className='carrito'/>
                    <Badge bg="secondary">{totalItemCart()}</Badge>
                </Button>
                
                </>
            )}

        </div>
    )

}

export default CartWidget;