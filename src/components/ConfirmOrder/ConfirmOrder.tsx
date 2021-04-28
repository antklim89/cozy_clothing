import { FC } from 'react';


import styles from './ConfirmOrder.module.scss';
import { ConfirmOrderPropTypes } from './ConfirmOrder.types';

import { Button } from '~/components/Button';
import { useCart } from '~/components/CartProvider';


export const ConfirmOrder: FC<ConfirmOrderPropTypes> = () => {
    const { cart } = useCart();

    const totalPrice = cart.reduce((acc, i) => (acc + i.product.price * i.qty), 0);
    return (
        <section className={styles.root}>
            <h2>Your Order</h2>
            <ul className={styles.orderList}>
                <li className={styles.orderItem}>
                    <h5>
                        <b>Product</b>
                    </h5>
                    <h5>
                        <b>Price</b>
                    </h5>
                </li>
                {cart.map((cartItem) => (
                    <li className={styles.orderItem} key={cartItem.id}>
                        <p>
                            {cartItem.product.title}
                            {' '}
                            ×
                            {' '}
                            {cartItem.qty}
                        </p>
                        <p>
                            $
                            {cartItem.product.price * cartItem.qty}
                        </p>
                    </li>
                ))}
            </ul>
            <p className={styles.totalPrice}>
                Total price: $
                {totalPrice}
            </p>
            <Button fullWidth>Confirm</Button>
        </section>
    );
};
