import { FC } from 'react';
import { useLunr } from 'react-lunr';

import styles from './Search.module.scss';
import { SearchPropTypes } from './Search.types';

import { ProductList } from '~/layouts/ProductList';
import { IProductPreview } from '~/types';


export const Search: FC<SearchPropTypes> = ({ index, store, query }) => {
    const products: IProductPreview[] = useLunr(query, index, store);

    if (products.length === 0) return <h5 className={styles.noResults}>No Results</h5>;
    return (
        <ProductList products={products.slice(0, 20)} />
    );
};
