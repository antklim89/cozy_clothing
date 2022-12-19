import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import Button from '~/components/Button';
import { ICartItem, useCart } from '~/components/CartProvider';
import SelectNumber from '~/components/SelectNumber';
import SelectSize from '~/components/SelectSize';
import { getPrice } from '~/utils';

import styles from './CartListItem.module.scss';


const CartListItem: FC<ICartItem> = (cartItem) => {
    const { removeFromCart, updateCartItem } = useCart();
    const {
        title, image, id, price, discount, type,
    } = cartItem;

    return (
        <>
            <li className={styles.root}>
                <GatsbyImage
                    alt={title}
                    className={styles.image}
                    image={image.childImageSharp.gatsbyImageData}
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
                        onChange={(qty) => updateCartItem(cartItem.id, { qty })}
                    />
                    <SelectSize
                        value={cartItem.size}
                        onChange={(size) => updateCartItem(cartItem.id, { size })}
                    />
                    <Button onClick={() => removeFromCart(cartItem)}>DELETE</Button>
                </div>
            </li>
            <hr className={styles.line} />
        </>
    );
};

export default CartListItem;
