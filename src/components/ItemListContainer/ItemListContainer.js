import data from "../mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const {category} = useParams();

    console.log(category);

    const getProducts = async () => {
        if (category) {
            const response = await data.filter(
                (product) => product.category === category
            );
                setProductList(response);
        } else {
            const response = await data;
            setProductList(response);
        }
}; 
useEffect(() => {
    getProducts();
}, [category]);


return (
    <>
    <ItemList lista={productList} />
    </>
);

}

export default ItemListContainer;


