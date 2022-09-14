const Item = ({title, price, image, detail}) => {

    return (
    <div>
        <img width={'200px'} src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h4>{detail}</h4>
    </div>

    );
};

export default Item;
