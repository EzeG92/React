import './ItemDetail.css';

const ItemDetail = ({item}) => {
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
                <button class="add">Agregar al carrito</button>
            </div>
        </div>

    </div>
);
};

export default ItemDetail;

