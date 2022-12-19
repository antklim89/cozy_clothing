import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './Product.module.scss';
import { ProductPropTypes } from './Product.types';
import { ProductImages } from './ProductImages';
import { ProductInfo } from './ProductInfo';


export const Product: FC<ProductPropTypes> = ({ product }) => {
    return (
        <>
            <div className={styles.root}>
                <ProductImages product={product} />
                <ProductInfo product={product} />
            </div>
            <ReactMarkdown>
                {product.body.replace(/\s/ig, ' ')}
            </ReactMarkdown>
        </>
    );
};
