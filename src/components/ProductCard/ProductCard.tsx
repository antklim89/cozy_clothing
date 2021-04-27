import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.types';

import CartIcon from '~/assets/shopping-cart.svg';
import { useCart } from '~/components/CartProvider';


export const ProductCard: FC<ProductCardProps> = ({
    product,
}) => {
    const { cart } = useCart();
    const isNew = new Date(product.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);
    const isInCart = cart.some((i) => i.id === product.id);

    return (
        <Link to={`/product/${product.id}`}>
            <article className={styles.root}>
                <GatsbyImage
                    alt={product.title}
                    className={styles.image}
                    image={product.images[0]}
                />
                <div className={styles.body}>
                    <h5>{product.title}</h5>
                    <p>
                        <small>{product.category}</small>
                        <br />
                        <strong>{product.brand}</strong>
                        <br />
                        <br />
                        $
                        <i>{product.price}</i>
                    </p>
                </div>
                <div className={styles.bagdes}>
                    {product.promo && (
                        <p>PROMO</p>
                    )}
                    {isNew && (
                        <p>NEW</p>
                    )}
                    {isInCart && (
                        <CartIcon fill="white" />
                    )}
                </div>
            </article>
        </Link>
    );
};
