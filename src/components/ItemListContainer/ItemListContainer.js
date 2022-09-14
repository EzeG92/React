import data from "../mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data);
        }, 2000);
    });

    getProducts.then((response) => {
        setProductList(response);
    });
}, []);

return (
    <>
    <ItemList lista={productList} />
    </>
);
};

export default ItemListContainer;
