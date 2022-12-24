import {
    FC, createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode,
} from 'react';
import { CartContext, ICartItem } from './CartProvider.types';
import { IProduct, IProductPreview, Sizes } from '~/types';
import { getCartFromStorage, setCartToStorage } from '~/utils';


const Context = createContext<CartContext>({} as CartContext);


const CartProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [cart, setCart] = useState(() => getCartFromStorage());

    useEffect(() => {
        setCartToStorage(cart);
    }, [cart]);

    const addToCart = useCallback((newItem: ICartItem) => {
        setCart((prev) => [...prev, newItem]);
    }, []);

    const removeFromCart = useCallback((itemToRemove: ICartItem) => {
        setCart((prev) => {
            return prev.filter((prevCartItem) => prevCartItem.id !== itemToRemove.id);
        });
    }, []);

    const updateCartItem = useCallback((id: string, itemToUpdate: Partial<ICartItem>) => {
        setCart((prevCartItems) => {
            return prevCartItems.map((prevCartItem) => (
                prevCartItem.id === id ? { ...prevCartItem, ...itemToUpdate } : prevCartItem
            ));
        });
    }, []);

    const getCartItem = useCallback((product: IProduct | IProductPreview): ICartItem => {
        return cart.find((storedCartItem) => storedCartItem.id === product.id) || {
            id: product.id,
            image: (product as IProduct).imagesPreview[0] || (product as IProductPreview).imagePreview,
            price: product.price,
            title: product.title,
            type: product.type,
            discount: product.discount,
            qty: 1,
            size: Sizes.M,
        };
    }, [cart]);

    const value: CartContext = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart,
        updateCartItem,
        getCartItem,
    }), [cart]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default CartProvider;

export const useCart = (): CartContext => useContext(Context);
