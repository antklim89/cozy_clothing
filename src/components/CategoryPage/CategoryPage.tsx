import { FC } from 'react';

import { Title } from '../Title';

import styles from './CategoryPage.module.scss';
import { CategoryPagePropTypes } from './CategoryPage.types';


import { Container } from '~/components/Container';


export const CategoryPage: FC<CategoryPagePropTypes> = ({ type, products }) => {
    return (
        <>
            <Container className={styles.root} component="section">
                <Title>{type}</Title>
                {products.map((product) => (
                    <div key={product.id} style={{ border: '1px solid black' }}>
                        <h5>{product.title}</h5>
                        <p>
                            $
                            {product.price}
                        </p>
                    </div>
                ))}
            </Container>
        </>
    );
};
