import Item from "../Item/Item"

const ItemDetail = ({item}) => {
    return (
    <div>
    {item.map((product) => (
        <Item
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            detail={product.detail}
        />
    ))}
    </div>
);
};

export default ItemDetail;