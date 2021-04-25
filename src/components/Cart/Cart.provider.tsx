import {
    FC, createContext, useContext, useState,
} from 'react';

import { CartContext, CartItem } from './Cart.types';


const context = createContext<CartContext>({} as CartContext);


export const CartProvider: FC = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (newItem: CartItem) => {
        setCart((prev) => [...prev, newItem]);
    };

    const removeFromCart = (itemToRemove: CartItem) => {
        setCart((prev) => prev.filter((i) => i !== itemToRemove));
    };

    const updateCartItem = (itemToupdate: CartItem) => {
        setCart((prev) => prev.map((i) => (i.id === itemToupdate.id ? itemToupdate : i)));
    };

    return (
        <context.Provider value={{
            cart, setCart, addToCart, removeFromCart, updateCartItem,
        }}
        >
            {children}
        </context.Provider>
    );
};

export const useCart = (): CartContext => useContext(context);
