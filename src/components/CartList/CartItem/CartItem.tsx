import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


import styles from './CartItem.module.scss';
import { CartItemPropTypes } from './CartItem.types';

import { Button } from '~/components/Button';
import { useCart } from '~/components/CartProvider';
import { SelectNumber } from '~/components/SelectNumber';
import { SelectSize } from '~/components/SelectSize';


export const CartItem: FC<CartItemPropTypes> = ({ cartItem }) => {
    const { removeFromCart, updateCartItem } = useCart();

    return (
        <>
            <li className={styles.root}>
                <GatsbyImage
                    alt={cartItem.product.title}
                    className={styles.image} image={cartItem.product.imagesPreview[0]}
                />
                <section className={styles.title}>
                    <Link className={styles.title} to={`/product/${cartItem.product.id}`}>
                        {cartItem.product.title}
                    </Link>
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
                    <SelectNumber
                        value={cartItem.qty}
                        onChange={(qty) => updateCartItem({ ...cartItem, qty })}
                    />
                    <SelectSize
                        value={cartItem.size}
                        onChange={(size) => updateCartItem({ ...cartItem, size })}
                    />
                    <Button onClick={() => removeFromCart(cartItem)}>DELETE</Button>
                </div>
            </li>
            <hr className={styles.line} />
        </>
    );
};