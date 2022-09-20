import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        console.log(counter);
    };

    return (

    <div class="container">

        <div class="images">
            <img src={item.image} alt={item.title} />
        </div>

        <div class="product"> 
            <p>{item.category}</p>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <p class="desc">{item.description}</p>
            <div class="buttons">
                <ItemCount setCounter={setCounter} counter={counter} />
            <Link to={'/cart'} onClick={handleClick}> Ir al carrito </Link>
            </div>
        </div>

    </div>
);
};

export default ItemDetail;

