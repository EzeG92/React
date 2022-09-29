import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    
    const {cart, removeItem, totalPriceCart} = useContext(CartContext)
    console.log('cart', cart)

    return (
        <div>
            

            {cart.length === 0 ? (
                <>
                    <h3>No hay productos en tu carrito</h3>
                    <Link to={'/'}>Volver a comprar</Link>
                </>
            
            ) : (
                <>
                {cart.map((item) => (
                <div key={item.id} className='listCart'>
                    <div>
                        <img src={'../img/' + item.image} alt={item.title} style={{width:'200px'}} />
                    </div>
                    <div className='titles'>
                        <h1>{item.title}</h1>
                        <h2>${item.price}</h2>  
                        <h3>Cantidad: {item.quantity}</h3> 
                        <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                    </div>
                    
                </div>
            ))}
            {totalPriceCart() > 0 ? <h3>Total: ${totalPriceCart()}</h3> : ""}
                </>
            )}
        </div>
    )

}

export default Cart;






