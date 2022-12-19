import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { IProduct } from '~/types';

import { cls } from '~/utils';

import styles from './Product.module.scss';
import { ProductInfo } from './ProductInfo';
import { ProductImages } from './ProductImages';
import { ProductTitle } from './ProductTitle';


export const Product: FC<IProduct> = (product) => {
    return (
        <section className={cls(styles.root, 'container mt-3')}>
            <div className={styles.top}>
                <div className={styles.images}>
                    <ProductImages {...product} />
                </div>
                <div className={styles.info}>
                    <ProductTitle {...product} />
                    <ProductInfo {...product} />
                </div>
            </div>
            <ReactMarkdown>
                {product.body.replace(/\s/ig, ' ')}
            </ReactMarkdown>
        </section>
    );
};
