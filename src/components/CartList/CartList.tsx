import { FC } from 'react';


import { CartItem } from './CartItem';
import { CartListPropTypes } from './CartList.types';

import { useCart } from '~/components/CartProvider';
import { Container } from '~/components/Container';


export const CartList: FC<CartListPropTypes> = () => {
    const { cart } = useCart();

    return (
        <Container component="ul">
            {cart.map((cartItem) => (
                <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
        </Container>
    );
};
