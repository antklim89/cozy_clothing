import { FC, memo, useCallback } from 'react';

import Button from '~/components/Button';
import { ICartItem, useCart } from '~/components/CartProvider';


export const ProductCartButton: FC<{cartItem: ICartItem}> = memo(({ cartItem }) => {
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
                    <Button onClick={handleRemoveFromCart}>
                        Remove From Cart
                    </Button>
                )
                : (
                    <Button onClick={handleAddToCart}>
                        Add To Card
                    </Button>
                )}
        </div>
    );
});

ProductCartButton.displayName = 'ProductCartButton';
