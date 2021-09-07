import { FC, useCallback } from 'react';

import { ProductCartButtonPropTypes } from './ProductCartButton.types';

import { useCart } from '~/components/CartProvider';


export const ProductCartButton: FC<ProductCartButtonPropTypes> = ({ cartItem }) => {
    const { cart, addToCart, removeFromCart } = useCart();

    const handleAddToCart = useCallback(() => {
        addToCart(cartItem);
    }, [cartItem]);

    const handleRemoveFromCart = useCallback(() => {
        if (cartItem) removeFromCart(cartItem);
    }, [cartItem, removeFromCart]);

    return (
        <div>
            {cart.includes(cartItem)
                ? (
                    <button
                        className="btn large"
                        type="button"
                        onClick={handleRemoveFromCart}
                    >
                        Remove From Cart
                    </button>
                )
                : (
                    <button
                        className="btn large"
                        type="button"
                        onClick={handleAddToCart}
                    >
                        Add To Card
                    </button>
                )}
        </div>
    );
};
