import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.types';


export const ProductCard: FC<ProductCardProps> = ({
    product,
}) => {
    return (
        <div className={styles.root}>
            <GatsbyImage alt={product.title} image={product.image} objectFit="fill" />
            <h5>{product.title}</h5>
            <p>
                $
                {product.price}
            </p>
        </div>
    );
};
