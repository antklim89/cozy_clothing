import { FC } from 'react';

import { ProductCard } from '../ProductCard';
import { Title } from '../Title';

import styles from './CategoryPage.module.scss';
import { CategoryPagePropTypes } from './CategoryPage.types';


import { Container } from '~/components/Container';


export const CategoryPage: FC<CategoryPagePropTypes> = ({ type, products }) => {
    return (
        <Container className={styles.root} component="section">
            <Title>{type}</Title>
            <div className={styles.products}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Container>
    );
};
