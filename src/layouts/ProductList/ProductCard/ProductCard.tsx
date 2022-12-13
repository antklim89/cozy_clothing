import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


import { useCart } from '~/components/CartProvider';
import { Price } from '~/components/Price';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.types';


export const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { cart } = useCart();
    const isNew = new Date(product.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);
    const isInCart = cart.some((cartItem) => cartItem.id === product.id);

    return (
        <Link
            aria-label={`
                ${product.title}
                ${isNew ? 'is new' : ''}
                ${product.discount > 0 ? `with discount ${product.discount}%` : ''}
                ${isInCart ? 'in cart' : ''}
            `}
            className={styles.link} to={`/product/${product.id}`}
        >
            <section className={styles.cart}>
                <div className={styles.image}>
                    <GatsbyImage
                        alt={product.title}
                        image={product.imagePreview.childImageSharp.gatsbyImageData}
                    />
                </div>
                <div className={styles.body}>
                    <h5>{product.title}</h5>
                    <p>
                        <small>{product.category}</small>
                    </p>
                    <Price discount={product.discount} price={product.price} />
                </div>
                <div className={styles.bagdes}>
                    {product.discount > 0 && (
                        <p>
                            -{product.discount.toFixed(2)}%
                        </p>
                    )}
                    {isNew ? <p>NEW</p> : null}
                    {isInCart ? <p>IN CART</p> : null}
                </div>
            </section>
        </Link>
    );
};
