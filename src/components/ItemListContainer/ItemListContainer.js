import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const {category} = useParams();

    console.log(category);

    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, 'items');
        const querySnapshot = category 
            ? query(queryBase, where("category", "==", category)) 
            : queryBase;
    
            getDocs(querySnapshot)
            .then((response)=> {
                const data = response.docs.map((doc) => {
                    console.log(doc.data());
                    return {id: doc.id, ...doc.data()};
                });
                setProductList(data);
            });
};

useEffect( () => {
    getProducts();
}, [category]);


return (
    <>
    <ItemList lista={productList} />
    </>
);

}

export default ItemListContainer;


