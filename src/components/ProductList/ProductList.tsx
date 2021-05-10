import { FC } from 'react';

import { ProductCard } from './ProductCard';
import styles from './ProductList.module.scss';
import { ProductListPropTypes } from './ProductList.types';


export const ProductList: FC<ProductListPropTypes> = ({ products }) => {
    return (
        <div className={styles.products}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
