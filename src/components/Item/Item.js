import './Item.css';

const Item = ({title, price, image}) => {

    return (
    <div className="item">
        <img width={'280px'} src={'../img/' + image} alt={title} />
        <h2>{title}</h2>
        <h3>${price}</h3>
    </div>

    );
};

export default Item;
