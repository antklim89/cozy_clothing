import { Link } from 'gatsby';
import { FC } from 'react';

import styles from './CategoriesBar.module.scss';
import { CategoriesBarPropTypes } from './CategoriesBar.types';


export const CategoriesBar: FC<CategoriesBarPropTypes> = ({
    type,
    categories,
}) => {
    return (
        <nav className={styles.root}>
            {categories.map((category) => (
                <li key={category}>
                    <Link to={`/category/${type}/${category}`}>{category}</Link>
                </li>
            ))}
        </nav>
    );
};
