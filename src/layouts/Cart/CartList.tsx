import { FC, useEffect } from 'react';
import styles from './CartList.module.scss';
import { CartListPropTypes } from './CartList.types';
import CartListItem from './CartListItem';
import { useCart } from '~/components/CartProvider';
import { getTotalPrice } from '~/utils';


const CartList: FC<CartListPropTypes> = ({ onChangeEmpty }) => {
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
                <CartListItem {...cartItem} key={cartItem.id} />
            ))}
            <p className={styles.totalPrice}>
                Total price: ${getTotalPrice(cart)}
            </p>
        </ul>
    );
};

export default CartList;
