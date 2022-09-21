import './Cart.css'
import carrito from '../../images/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    
    const {cart, addItem, removeItem} = useContext(CartContext)
    console.log('cart', cart)

    return (
        <div>
            {/* <img src={carrito} alt="carrito de compras" className='carrito'/> */}
            {cart.length === 0 ? (
                <>
                    <h3>No hay productos en tu carrito</h3>
                    <Link to={'/'}>Volver a comprar</Link>
                </>
            
            ) : (
                <>
                {cart.map((item) => (
                <div key={item.id} style={{display: 'flex', flexDirection:'column', alignItems: 'center', columnGap:'20px'}}>
                    <img src={item.image} alt={item.title} style={{width:'200px'}} />
                    <h1>{item.title}</h1>
                    <h2>${item.price}</h2>  
                    <h3>{item.quantity}</h3> 
                    <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                </div>
            ))}
                </>
            )}
        </div>
    )

}

export default Cart;






