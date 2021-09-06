import { FC } from 'react';

import styles from './ProductTitle.module.scss';
import { ProductTitlePropTypes } from './ProductTitle.types';


export const ProductTitle: FC<ProductTitlePropTypes> = ({ product }) => {
    const isNew = new Date(product.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);

    return (
        <>
            <h1>
                {product.title}
            </h1>
            <p>
                {product.type}
            </p>
            <p className={styles.promos}>
                {isNew && (
                    <span>NEW PRODUCT</span>
                )}
                {product.discount > 0 && (
                    <span>
                        DISCOUNT{' '}{product.discount}%
                    </span>
                )}
            </p>
        </>
    );
};
