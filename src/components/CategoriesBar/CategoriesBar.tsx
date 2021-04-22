import { Link } from 'gatsby';
import { FC } from 'react';


import styles from './CategoriesBar.module.scss';
import { CategoriesBarPropTypes } from './CategoriesBar.types';

import { Button } from '~/components/Button';


export const CategoriesBar: FC<CategoriesBarPropTypes> = ({
    type,
    categories,
}) => {
    return (
        <nav className={styles.root}>
            {categories.map((category) => (
                <li key={category}>
                    <Button
                        activeClassName={styles.active}
                        color="secondary"
                        component={Link}
                        to={`/category/${type}/${category}`}
                        variant="text"
                    >
                        {category}
                    </Button>
                </li>
            ))}
        </nav>
    );
};
