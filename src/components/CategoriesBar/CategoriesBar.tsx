import { Link } from 'gatsby';
import uniq from 'lodash/uniq';
import { FC } from 'react';


import styles from './CategoriesBar.module.scss';
import { CategoriesBarPropTypes } from './CategoriesBar.types';


const CategoriesBar: FC<CategoriesBarPropTypes> = ({
    type,
    categories,
}) => {
    return (
        <nav className={styles.root}>
            {uniq(categories).map((category) => (
                <li key={category}>
                    <Link
                        activeClassName={styles.active}
                        className="btn underline mx-2"
                        to={`/products/${type}/${category}`}
                    >
                        {category}
                    </Link>
                </li>
            ))}
        </nav>
    );
};

export default CategoriesBar;
