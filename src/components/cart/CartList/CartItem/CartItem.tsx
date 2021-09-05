import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


import styles from './CartItem.module.scss';
import { CartItemPropTypes } from './CartItem.types';

import { useCart } from '~/components/cart/CartProvider';
import { SelectNumber } from '~/components/ui/SelectNumber';
import { SelectSize } from '~/components/ui/SelectSize';
import { getPrice } from '~/utils';


export const CartItem: FC<CartItemPropTypes> = ({ cartItem }) => {
    const { removeFromCart, updateCartItem } = useCart();
    const { product } = cartItem;

    return (
        <>
            <li className={styles.root}>
                <GatsbyImage
                    alt={product.title}
                    className={styles.image}
                    image={product.imagesPreview[0].childImageSharp.gatsbyImageData}
                />
                <section className={styles.title}>
                    <Link className={styles.link} to={`/product/${product.id}`}>
                        <h4>{product.title}</h4>
                    </Link>
                    <br />
                    <small>
                        {product.type}
                    </small>
                </section>
                <div className={styles.price}>
                    <p>
                        Price:&nbsp;${getPrice(product.price, product.discount)}
                    </p>
                    <p>
                        Quantity:&nbsp;{cartItem.qty}
                    </p>
                    <p>
                        <b>
                            Total:&nbsp;${product.price * cartItem.qty}
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
