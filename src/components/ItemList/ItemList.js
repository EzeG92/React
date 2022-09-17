import Item from "../Item/Item";
import './ItemList.css';
import { Link } from "react-router-dom";

const ItemList = ({ lista }) => {
return (
    <div className="listaProductos">
    {lista.map((product) => (

        <Link key={product.id} to={'/item/' + product.id} style={{textDecoration:'none'}} >
            <Item
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            category={product.category}
        />
        </Link>

    ))}
    </div>
);
};

export default ItemList;
