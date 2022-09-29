import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    const db = getFirestore();


    const getItem = () => {
        const queryDoc = doc(db, 'items', id);
        getDoc(queryDoc)
        .then((res) => {
            setProductDetail({ id: res.id, ...res.data()});
        })
        .catch ((err) => console.log(err));
    };

    useEffect(() => {
        getItem();
    }, [id]);

return (
    <>
    <ItemDetail item={productDetail} />
    </>
);
};

export default ItemDetailContainer;
