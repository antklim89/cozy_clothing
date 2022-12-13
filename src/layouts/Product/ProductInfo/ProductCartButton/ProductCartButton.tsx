import { FC, memo, useCallback } from 'react';

import { useCart } from '~/components/CartProvider';

import { ProductCartButtonPropTypes } from './ProductCartButton.types';


export const ProductCartButton: FC<ProductCartButtonPropTypes> = memo(({ cartItem }) => {
    const { cart, addToCart, removeFromCart } = useCart();

    const handleAddToCart = useCallback(() => {
        addToCart(cartItem);
    }, [cartItem]);

    const handleRemoveFromCart = useCallback(() => {
        if (cartItem) removeFromCart(cartItem);
    }, [cartItem]);

    return (
        <div>
            {cart.find((item) => cartItem.id === item.id)
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
});

ProductCartButton.displayName = 'ProductCartButton';
