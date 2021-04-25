import { FC, useState } from 'react';


import { Button } from '../Button';
import { Shadow } from '../Shadow';

import styles from './Cart.module.scss';
import { useCart } from './Cart.provider';


export const Cart: FC = () => {
    const [isShow, setIsShow] = useState(false);
    const { cart } = useCart();


    return (
        <div className={styles.root}>
            <Button
                color="secondary"
                fontColor="light"
                variant="text"
                onClick={() => setIsShow((p) => !p)}
            >
                Cart
                {' '}
                <span className={styles.cartLength}>{cart.length}</span>
            </Button>
            {isShow && (
                <>
                    <Shadow onClick={() => setIsShow(false)} />
                    <section className={styles.cart}>
                        <ul>
                            {cart.map((cartItem) => (
                                <li>
                                    {cartItem.product.title}
                                </li>
                            ))}
                        </ul>
                    </section>
                </>
            )}
        </div>
    );
};
