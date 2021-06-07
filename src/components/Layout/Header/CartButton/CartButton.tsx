import { Link } from 'gatsby';
import { FC } from 'react';


import styles from './CartButton.module.scss';

import CartIcon from '~/assets/shopping_cart.svg';
import { Button } from '~/components/Button';
import { useCart } from '~/components/CartProvider';


export const CartButton: FC = () => {
    const { cart } = useCart();

    return (
        <Button
            aria-label={`cart with ${cart.length} products.`}
            color="secondary"
            component={Link}
            to="/cart"
            variant="text"
        >
            <CartIcon />
            {' '}
            <span className={styles.cartLength}>{cart.length}</span>
        </Button>
    );
};
