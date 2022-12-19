import { FC } from 'react';

import Button from '~/components/Button';
import { useCart } from '~/components/CartProvider';
import { getPrice, getTotalPrice } from '~/utils';

import styles from './CartOrderConfirm.module.scss';


export const CartOrderConfirm: FC = () => {
    const { cart } = useCart();

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
                {cart.map(({ product: { price, discount, title }, id, qty }) => (
                    <li className={styles.orderItem} key={id}>
                        <p>
                            {title} &times; {qty}
                        </p>
                        <p>
                            ${getPrice({ price, discount, qty })}
                        </p>
                    </li>
                ))}
            </ul>
            <p className={styles.totalPrice}>
                Total price: ${getTotalPrice(cart)}
            </p>
            <Button className="full-width">Place Order</Button>
        </section>
    );
};

