import { FC } from 'react';

import { IProduct } from '~/types';

import styles from './ProductTitle.module.scss';


const ProductTitle: FC<IProduct> = ({ createdAt, title, type, discount }) => {
    const isNew = new Date(createdAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);

    return (
        <div className={styles.root}>
            <h1>{title}</h1>
            <p>for {type}</p>
            <p className={styles.promos}>
                {isNew ? <span>NEW PRODUCT</span> : null}
                {discount > 0 && (
                    <span>
                        DISCOUNT {discount}%
                    </span>
                )}
            </p>
        </div>
    );
};

export default ProductTitle;

