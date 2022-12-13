import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { useCart } from '~/components/CartProvider';
import { SelectNumber } from '~/components/SelectNumber';
import { SelectSize } from '~/components/SelectSize';
import { getPrice } from '~/utils';

import styles from './CartItem.module.scss';
import { CartItemPropTypes } from './CartItem.types';


export const CartItem: FC<CartItemPropTypes> = ({ cartItem }) => {
    const { removeFromCart, updateCartItem } = useCart();
    const {
        title, imagesPreview, id, price, discount, type,
    } = cartItem.product;

    return (
        <>
            <li className={styles.root}>
                <GatsbyImage
                    alt={title}
                    className={styles.image}
                    image={imagesPreview[0].childImageSharp.gatsbyImageData}
                />
                <section className={styles.title}>
                    <Link className={styles.link} to={`/product/${id}`}>
                        <h4>{title}</h4>
                    </Link>
                    <br />
                    <small>
                        {type}
                    </small>
                </section>
                <div className={styles.price}>
                    <p>
                        Price:&nbsp;${getPrice({ price, discount })}
                    </p>
                    <p>
                        Quantity:&nbsp;{cartItem.qty}
                    </p>
                    <p>
                        <b>
                            Total:&nbsp;${(price * cartItem.qty)}
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
                    <button className="btn" type="button" onClick={() => removeFromCart(cartItem)}>DELETE</button>
                </div>
            </li>
            <hr className={styles.line} />
        </>
    );
};
