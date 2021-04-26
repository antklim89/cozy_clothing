import { FC } from 'react';


import { Button } from '../Button';

import styles from './Cart.module.scss';
import { useCart } from './Cart.provider';

import CartIcon from '~/assets/shopping-cart.svg';


export const Cart: FC = () => {
    const { cart } = useCart();

    return (
        <div className={styles.root}>
            <Button
                color="secondary"
                fontColor="light"
                variant="text"
            >
                <CartIcon />
                {' '}
                <span className={styles.cartLength}>{cart.length}</span>
            </Button>
        </div>
    );
};
