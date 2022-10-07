import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';



const ItemDetail = ({ item }) => {
    const [counter, setCounter] = useState(1);
    const { addItem } = useContext(CartContext);

    function onAdd(item) {
        addItem(item, counter);
    };

    return (

        <>

            <div className='volver2'>
                <Link to='/'>Volver</Link>
            </div>

            <div className="container">

                <div className="images">
                    <img src={'../img/' + item.image} alt={item.title} />
                </div>

                <div className="product">
                    <p>{item.category}</p>
                    <h1>{item.title}</h1>
                    <h2>${item.price}</h2>
                    <p className="desc">{item.description}</p>
                    <p>Stock :{item.stock}</p>
                    <div className="buttons">
                        <ItemCount stock={'10'} setCounter={setCounter} counter={counter} />
                        <Link to={'/cart'} onClick={() => onAdd(item)} className='add'> Agregar al carrito </Link>
                    </div>
                </div>

            </div>
        </>

    );
};

export default ItemDetail;

