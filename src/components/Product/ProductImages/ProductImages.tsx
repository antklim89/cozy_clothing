import { GatsbyImage } from 'gatsby-plugin-image';
import { FC, useState } from 'react';

import { ProductPropTypes } from '../Product.types';

import styles from './ProductImages.module.scss';


export const ProductImages: FC<ProductPropTypes> = ({ product }) => {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className={styles.root}>
            <ul className={styles.imagesPreview}>
                {product.imagesPreview.map((image, index) => (
                    <li
                        className={styles.imagePreview}
                        key={image.images.fallback?.src}
                    >
                        <button
                            className={index === imageIndex ? styles.selected : ''}
                            type="button"
                            onClick={() => setImageIndex(index)}
                        >
                            <GatsbyImage alt={product.title} image={image} />
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.image}>
                <GatsbyImage
                    alt={product.title}
                    image={product.images[imageIndex]}
                    key={product.images[imageIndex].images.fallback?.src}
                />
            </div>
        </div>
    );
};
