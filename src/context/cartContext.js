import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    

    const addItem = (item, quantity) => {
        const itemInCart = isInCart(item.id)
        if (itemInCart) {
            itemInCart.quantity = itemInCart.quantity += quantity;
        } else {
            setCart([...cart, {...item, quantity}]);
        }
            console.log([...cart, {...item, quantity}]);
        }

    const isInCart = (id) => {
        return cart.find ((item) => item.id === id);
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const clear = () => {
        setCart([]);
        console.log(cart);
    };

    const totalPriceCart = () => {
        return cart.reduce ((acc, item) => acc + (item.price * item.quantity), 0)
    }

    const totalItemCart = () => {
        return cart.reduce ((acc, item) => acc + item.quantity, 0)
    }

    return(

        <CartContext.Provider value ={{cart, addItem, removeItem, clear, totalPriceCart, totalItemCart}}>
            {children}
        </CartContext.Provider>
    );

};