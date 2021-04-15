import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.types';


export const ProductCard: FC<ProductCardProps> = ({
    product,
}) => {
    return (
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
                    {' '}
                    for
                    {' '}
                    $
                    <i>{product.price}</i>
                </p>
            </div>
        </article>
    );
};
