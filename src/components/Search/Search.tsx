import { FC, useEffect, useState } from 'react';
import { useLunr } from 'react-lunr';

import { ProductList } from '../ProductList';

import styles from './Search.module.scss';
import { SearchPropTypes } from './Search.types';

// import { IProductPreview } from '~/types';


export const Search: FC<SearchPropTypes> = ({ index, store, query }) => {
    const products = useLunr<any>(query, index, store);

    // useEffect(() => {
    //     productPreviewArraySchema.validate(results)
    //         .then((validatedProducts) => setProducts(validatedProducts))
    //         .catch((err) => console.error(err));
    // }, [results.length]);


    if (products.length === 0) return <h5 className={styles.noResults}>No Results</h5>;
    return (
        <ProductList products={products.slice(0, 20)} />
    );
};
