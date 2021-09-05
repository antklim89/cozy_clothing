import { FC } from 'react';

import styles from './ConfirmOrder.module.scss';

import { useCart } from '~/components/cart/CartProvider';
import { getPrice, getTotalPrice } from '~/utils';


export const ConfirmOrder: FC = () => {
    const { cart } = useCart();

    const totalPrice = getTotalPrice(cart);
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
                            {product.title}
                            {' '}
                            ×
                            {' '}
                            {qty}
                        </p>
                        <p>
                            $
                            {(getPrice(product.price, product.discount) * qty).toFixed(2)}
                        </p>
                    </li>
                ))}
            </ul>
            <p className={styles.totalPrice}>
                Total price: $
                {totalPrice.toFixed(2)}
            </p>
            <button className="btn full-width" type="button" >Place Order</button>
        </section>
    );
};

