import { FC } from 'react';
import { useLunr } from 'react-lunr';

import { ProductList } from '../ProductList';

import styles from './Search.module.scss';
import { SearchPropTypes } from './Search.types';

import { productPreviewArraySchema } from '~/validation';


export const Search: FC<SearchPropTypes> = ({ index, store, query }) => {
    const results = useLunr(query, index, store);

    const products = productPreviewArraySchema.validateSync(results);

    if (results.length === 0) return <h5 className={styles.noResults}>No Results</h5>;
    return (
        <ProductList products={products} />
    );
};
