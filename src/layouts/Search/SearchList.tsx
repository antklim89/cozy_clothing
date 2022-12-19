import { FC } from 'react';
import { useLunr } from 'react-lunr';

import ProductList from '~/layouts/ProductList';
import { IProductPreview } from '~/types';

import styles from './SearchList.module.scss';
import { SearchListPropTypes } from './SearchList.types';


const SearchList: FC<SearchListPropTypes> = ({ index, store, query }) => {
    const products: IProductPreview[] = useLunr(query, index, store);

    if (products.length === 0) return <h5 className={styles.noResults}>No Results</h5>;
    return (
        <ProductList products={products.slice(0, 20)} />
    );
};

export default SearchList;
