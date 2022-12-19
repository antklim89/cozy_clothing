import { FC } from 'react';

import styles from './ProductList.module.scss';
import { ProductListPropTypes } from './ProductList.types';
import ProductListCard from './ProductListCard';


const ProductList: FC<ProductListPropTypes> = ({ products }) => {
    return (
        <div className={styles.products}>
            {products.map((product) => (
                <ProductListCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
