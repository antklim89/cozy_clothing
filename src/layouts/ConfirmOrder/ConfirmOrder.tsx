import { FC } from 'react';

import { useCart } from '~/components/CartProvider';
import { getPrice, getTotalPrice } from '~/utils';

import styles from './ConfirmOrder.module.scss';


export const ConfirmOrder: FC = () => {
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
            <button className="btn full-width" type="button" >Place Order</button>
        </section>
    );
};

