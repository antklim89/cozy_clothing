import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { Title } from '../Title';

import styles from './Product.module.scss';
import { ProductPropTypes } from './Product.types';


export const Product: FC<ProductPropTypes> = ({ product }) => {
    return (
        <>
            <div className={styles.root}>
                <div className={styles.imagesPreview}>
                    {product.imagesPreview.map((image) => (
                        <GatsbyImage
                            alt={product.title}
                            className={styles.imagePreview}
                            image={image}
                            key={image.images.fallback?.src}
                        />
                    ))}
                </div>
                <div className={styles.image}>
                    <GatsbyImage
                        alt={product.title}
                        image={product.images[0]}
                        key={product.images[0].images.fallback?.src}
                    />
                </div>
                <div className={styles.body}>
                    <Title>{product.title}</Title>
                    <h3>{product.brand}</h3>
                    <h2>{product.type}</h2>
                    <b>
                        $
                        {product.price}
                    </b>
                </div>
            </div>
            <ReactMarkdown>
                {product.rawMarkdownBody.replace(/\s/ig, ' ')}
            </ReactMarkdown>
        </>
    );
};
