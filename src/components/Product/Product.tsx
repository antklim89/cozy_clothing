import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './Product.module.scss';
import { ProductPropTypes } from './Product.types';
import { ProductDescription } from './ProductDescription';
import { ProductImages } from './ProductImages';


export const Product: FC<ProductPropTypes> = ({ product }) => {
    return (
        <>
            <div className={styles.root}>
                <ProductImages product={product} />
                <ProductDescription product={product} />
            </div>
            <ReactMarkdown>
                {product.rawMarkdownBody.replace(/\s/ig, ' ')}
            </ReactMarkdown>
        </>
    );
};
