import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { ProductPropTypes } from '../Product.types';

import styles from './ProductImages.module.scss';


export const ProductImages: FC<ProductPropTypes> = ({ product }) => {
    return (
        <div className={styles.root}>
            <ul className={styles.imagesPreview}>
                {product.imagesPreview.map((image) => (
                    <li className={styles.imagePreview} key={image.images.fallback?.src}>
                        <div>
                            <GatsbyImage
                                alt={product.title}
                                image={image}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles.image}>
                <GatsbyImage
                    alt={product.title}
                    image={product.images[0]}
                    key={product.images[0].images.fallback?.src}
                />
            </div>
        </div>
    );
};
