import { FC, useEffect } from 'react';

import { CartItem } from './CartItem';
import styles from './CartList.module.scss';
import { CartListPropTypes } from './CartList.types';

import { useCart } from '~/components/CartProvider';
import { getTotalPrice } from '~/utils';


export const CartList: FC<CartListPropTypes> = ({ onChangeEmpty }) => {
    const { cart } = useCart();

    useEffect(() => {
        if (onChangeEmpty) onChangeEmpty(cart.length === 0);
    }, [cart.length === 0]);

    if (cart.length === 0) {
        return (
            <p className={styles.emptyCart}>Cart is empty...</p>
        );
    }

    return (
        <ul>
            {cart.map((cartItem) => (
                <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
            <p className={styles.totalPrice}>
                Total price: ${getTotalPrice(cart).toFixed(2)}
            </p>
        </ul>
    );
};
