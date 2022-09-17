import data from "../mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data);
    }, 200);
    });

    getItem.then((response) => {
        setProductDetail(data.find(product => product.id === id));
    });

}, [id]);

return (
    <>
    <ItemDetail item={productDetail} />
    </>
);
};

export default ItemDetailContainer;
