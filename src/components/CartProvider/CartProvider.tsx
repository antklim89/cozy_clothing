import {
    FC, createContext, useContext, useState, useEffect,
} from 'react';

import { CartContext, CartItem } from './CartProvider.types';


const context = createContext<CartContext>({} as CartContext);


const isBrowser = typeof window !== 'undefined';

export const CartProvider: FC = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (!isBrowser) return [];
        const data = localStorage.getItem('cart');
        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        if (isBrowser) localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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
