import {
    FC, createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode,
} from 'react';

import { getCartFromStorage, setCartToStorage } from '~/utils';

import { CartContext, ICartItem } from './CartProvider.types';


const context = createContext<CartContext>({} as CartContext);


export const CartProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [cart, setCart] = useState(() => getCartFromStorage());

    useEffect(() => {
        setCartToStorage(cart);
    }, [cart]);

    const addToCart = useCallback((newItem: ICartItem) => {
        setCart((prev) => [...prev, newItem]);
    }, []);

    const removeFromCart = useCallback((itemToRemove: ICartItem) => {
        setCart((prev) => {
            return prev.filter((prevCartItem) => prevCartItem !== itemToRemove);
        });
    }, []);

    const updateCartItem = useCallback((itemToupdate: ICartItem) => {
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
