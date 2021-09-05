import {
    FC, createContext, useContext, useState, useEffect, useCallback, useMemo,
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

    const addToCart = useCallback((newItem: CartItem) => {
        setCart((prev) => [...prev, newItem]);
    }, []);

    const removeFromCart = useCallback((itemToRemove: CartItem) => {
        setCart((prev) => {
            return prev.filter((prevCartItem) => prevCartItem !== itemToRemove);
        });
    }, []);

    const updateCartItem = useCallback((itemToupdate: CartItem) => {
        setCart((prev) => {
            return prev.map((prevCartItem) => (prevCartItem.id === itemToupdate.id ? itemToupdate : prevCartItem));
        });
    }, []);

    const value = useMemo(() => ({ cart, setCart, addToCart, removeFromCart, updateCartItem }), [cart]);

    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    );
};

export const useCart = (): CartContext => useContext(context);
