import Swal from 'sweetalert2'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import moment from 'moment/moment'

const Cart = () => {
    
    const {cart, removeItem, totalPriceCart} = useContext(CartContext)
    
    const createOrder = () => {
        const db = getFirestore();
        const order = {
            buyer: {
                name: 'Eze',
                phone: '3412223344',
                email: 'eze@test.com.ar'
        } ,
            items: cart,
            total: totalPriceCart(),
            date: moment().format(),
        };

        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({id}) => {
            console.log(id);
            Swal.fire('Felicidades por tu compra');
        })
        .catch(() => Swal.fire('Tu compra no pudo ser procesada'));
    }


    return (
        <div>
            

            {cart.length === 0 ? (
                <div className='noProducts'>
                    <h3>No hay productos en tu carrito</h3>
                    <Link to={'/'} className="volver">Volver a comprar</Link>
                </div>
            
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
            {totalPriceCart() > 0 ? <h3 className='totalPrice'>Total: ${totalPriceCart()}</h3> : ""}

            <div>
                <button onClick={createOrder} className='crearOrden'>Crear orden</button>
            </div>
            
                </>
            )}

        </div>
    )

}

export default Cart;






