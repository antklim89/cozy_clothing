import { FC, Fragment } from 'react';

import styles from './CategoryPage.module.scss';
import { CategoryPagePropTypes } from './CategoryPage.types';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';


export const CategoryPage: FC<CategoryPagePropTypes> = ({ categories }) => {
    return (
        <>
            <Container className={styles.root} component="section">
                <div className={styles.categories}>
                    {categories.map((category, index) => (
                        <Fragment key={category.name}>
                            <Button className={styles.category} variant="text">
                                {category.name}
                            </Button>
                            {categories.length - 1 !== index && <div>|</div>}
                        </Fragment>
                    ))}
                </div>
            </Container>
        </>
    );
};
