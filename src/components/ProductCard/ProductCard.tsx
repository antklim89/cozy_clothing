import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.types';


export const ProductCard: FC<ProductCardProps> = ({
    product,
}) => {
    return (
        <div className={styles.root}>
            <GatsbyImage
                alt={product.title}
                className={styles.image}
                image={product.image}
                // objectFit="cover"
                // style={{ width: '100%' }}
            />
            <h5>{product.title}</h5>
            <small>{product.category}</small>
            <p>
                $
                {product.price}
            </p>
        </div>
    );
};
