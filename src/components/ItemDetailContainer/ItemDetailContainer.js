import data2 from "../mockDataDetalle";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data2);
    }, 2000);
    });

    getItem.then((response) => {
        setProductDetail(response);
    });

}, []);

return (
    <>
    <ItemDetail item={productDetail} />
    </>
);
};

export default ItemDetailContainer;
