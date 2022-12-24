import { Link } from 'gatsby';
import { FC } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '~/assets/shopping_cart.svg';
import { useCart } from '~/components/CartProvider';


const HeaderCartButton: FC = () => {
    const { cart } = useCart();

    return (
        <Link
            aria-label={`cart with ${cart.length} products.`}
            className="btn text"
            to="/cart"
        >
            <CartIcon />
            {' '}
            <span className={styles.cartLength}>{cart.length}</span>
        </Link>
    );
};

export default HeaderCartButton;
