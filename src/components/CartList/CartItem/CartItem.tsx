import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


import styles from './CartItem.module.scss';
import { CartItemPropTypes } from './CartItem.types';

import { SelectNumber } from '~/components/SelectNumber';


export const CartItem: FC<CartItemPropTypes> = ({ cartItem }) => {
    return (
        <>
            <li className={styles.root}>
                <GatsbyImage
                    alt={cartItem.product.title}
                    className={styles.image} image={cartItem.product.imagesPreview[0]}
                />
                <section className={styles.title}>
                    <h5>
                        {cartItem.product.title}
                    </h5>
                    <br />
                    <b>
                        {cartItem.product.brand}
                    </b>
                    <br />
                    <small>
                        {cartItem.product.type}
                    </small>
                </section>
                <p className={styles.price}>
                    Price:&nbsp;$
                    {cartItem.product.price}
                    <br />
                    Quantity:&nbsp;
                    {cartItem.qty}
                    <br />
                    Total:&nbsp;$
                    {cartItem.product.price * cartItem.qty}
                </p>
                <div className={styles.options}>
                    <SelectNumber value={1} onChange={() => 1} />
                </div>
            </li>
            <hr className={styles.line} />
        </>
    );
};
