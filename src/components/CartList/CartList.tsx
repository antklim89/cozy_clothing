import { FC } from 'react';


import { Button } from '../Button';

import { CartItem } from './CartItem';
import styles from './CartList.module.scss';
import { CartListPropTypes } from './CartList.types';

import { useCart } from '~/components/CartProvider';
import { Container } from '~/components/Container';


export const CartList: FC<CartListPropTypes> = () => {
    const { cart } = useCart();

    const totalPrice = cart.reduce((acc, i) => (acc + i.product.price * i.qty), 0);
    return (
        <Container>
            <ul>
                {cart.map((cartItem) => (
                    <CartItem cartItem={cartItem} key={cartItem.id} />
                ))}
            </ul>
            <div className={styles.right}>
                <p className={styles.totalPrice}>
                    Total price: $
                    {totalPrice}
                </p>
                <Button size="large">Next</Button>
            </div>
        </Container>
    );
};
