import Swal from 'sweetalert2'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'

const Cart = () => {
    
    const {cart, removeItem, clear, totalPriceCart} = useContext(CartContext)
    const navigate = useNavigate();
    const db = getFirestore();
    
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
            updateStockProduct();
            Swal.fire('Felicidades por tu compra');
        })
        .catch(() => Swal.fire('Tu compra no pudo ser procesada'));
    }

    const updateStockProduct = () => {

        cart.forEach((product) => {
            const queryUpdate = doc(db, 'items', product.id);
    
        updateDoc(queryUpdate, {
            category: product.category,
            description: product.description,
            image: product.image,
            price: product.price,
            title: product.title,
            stock: product.stock - product.quantity,
        }).then(() => {
                if (cart[cart.length - 1].id === product.id) {
                clear();
                navigate("/");
                console.log("stock actualizado");
                }
            })
            .catch(() => {
                console.log("error al actualizar el stock");
            });
        });
    };


    return (
        <div className='boxCart'>
            

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






