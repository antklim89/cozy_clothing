import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.types';

import { useCart } from '~/components/CartProvider';
import { Price } from '~/components/Price';


export const ProductCard: FC<ProductCardProps> = ({
    product: { frontmatter, id },
}) => {
    const { cart } = useCart();
    const isNew = new Date(frontmatter.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);
    const isInCart = cart.some((i) => i.id === id);

    return (
        <Link
            aria-label={`
                ${frontmatter.title}
                ${isNew ? 'is new' : ''}
                ${frontmatter.discount > 0 ? `with discount ${frontmatter.discount}%` : ''}
                ${isInCart ? 'in cart' : ''}
            `}
            className={styles.link} to={`/product/${id}`}
        >
            <section className={styles.cart}>
                <div className={styles.image}>
                    <GatsbyImage
                        alt={frontmatter.title}
                        image={frontmatter.imagePreview.childImageSharp.gatsbyImageData}
                    />
                </div>
                <div className={styles.body}>
                    <h5>{frontmatter.title}</h5>
                    <p>
                        <small>{frontmatter.category}</small>
                    </p>
                    <Price discount={frontmatter.discount} price={frontmatter.price} />
                </div>
                <div className={styles.bagdes}>
                    {frontmatter.discount > 0 && (
                        <p>
                            -
                            {frontmatter.discount}
                            %
                        </p>
                    )}
                    {isNew && (
                        <p>NEW</p>
                    )}
                    {isInCart && (
                        <p>IN CART</p>
                    )}
                </div>
            </section>
        </Link>
    );
};
