import { FC } from 'react';
import { useLunr } from 'react-lunr';

import styles from './SearchList.module.scss';
import { SearchListPropTypes } from './SearchList.types';

import { ProductList } from '~/layouts/ProductList';
import { IProductPreview } from '~/types';


export const SearchList: FC<SearchListPropTypes> = ({ index, store, query }) => {
    const products: IProductPreview[] = useLunr(query, index, store);

    if (products.length === 0) return <h5 className={styles.noResults}>No Results</h5>;
    return (
        <ProductList products={products.slice(0, 20)} />
    );
};
