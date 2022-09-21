import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('El producto ya esta en el carrito');
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
            console.log([...cart, {...item, cantidad}]);
        }

    const isInCart = (id) => {
        return cart.some ((item) => item.id === id);
    };

    // const clear = () => {
    //     setCart([]);
    // };

    return(
        <CartContext.Provider value ={{cart, addItem }}>
            {children}
        </CartContext.Provider>
    );

};