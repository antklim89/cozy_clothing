import { FC } from 'react';

import styles from './ConfirmOrder.module.scss';

import { useCart } from '~/components/CartProvider';
import { getPrice, getTotalPrice } from '~/utils';


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
                {cart.map(({ product, id, qty }) => (
                    <li className={styles.orderItem} key={id}>
                        <p>
                            {product.title} &times; {qty}
                        </p>
                        <p>
                            ${(getPrice(product.price, product.discount) * qty).toFixed(2)}
                        </p>
                    </li>
                ))}
            </ul>
            <p className={styles.totalPrice}>
                Total price: ${getTotalPrice(cart).toFixed(2)}
            </p>
            <button className="btn full-width" type="button" >Place Order</button>
        </section>
    );
};

