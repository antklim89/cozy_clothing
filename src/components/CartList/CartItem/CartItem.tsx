import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


import styles from './CartItem.module.scss';
import { CartItemPropTypes } from './CartItem.types';

import { Button } from '~/components/Button';
import { useCart } from '~/components/CartProvider';
import { SelectNumber } from '~/components/SelectNumber';
import { SelectSize } from '~/components/SelectSize';
import { getPrice } from '~/utils';


export const CartItem: FC<CartItemPropTypes> = ({ cartItem }) => {
    const { removeFromCart, updateCartItem } = useCart();

    const { product: { frontmatter, id } } = cartItem;

    return (
        <>
            <li className={styles.root}>
                <GatsbyImage
                    alt={frontmatter.title}
                    className={styles.image}
                    image={frontmatter.imagesPreview[0].childImageSharp.gatsbyImageData}
                />
                <section className={styles.title}>
                    <Link className={styles.title} to={`/product/${id}`}>
                        <h4>{frontmatter.title}</h4>
                    </Link>
                    <br />
                    <small>
                        {frontmatter.type}
                    </small>
                </section>
                <div className={styles.price}>
                    <p>
                        Price:&nbsp;$
                        {getPrice(frontmatter.price, frontmatter.discount)}
                    </p>
                    <p>
                        Quantity:&nbsp;
                        {cartItem.qty}
                    </p>
                    <p>
                        <b>
                            Total:&nbsp;$
                            {frontmatter.price * cartItem.qty}
                        </b>
                    </p>
                </div>
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
