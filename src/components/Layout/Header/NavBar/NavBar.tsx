import { Link } from 'gatsby';
import { FC } from 'react';


import styles from './NavBar.module.scss';
import { NavBarPropTypes } from './NavBar.types';

import { Button } from '~/components/Button';
import { productTypes } from '~/constants';


export const NavBar: FC<NavBarPropTypes> = () => {
    return (
        <nav>
            <ul className={styles.nav}>
                {productTypes.map((type) => (
                    <li className="hide-sm" key={type}>
                        <Button
                            partiallyActive
                            activeClassName={styles.active}
                            className={styles.link}
                            color="secondary"
                            component={Link}
                            to={`/category/${type}`}
                            variant="text"
                        >
                            {type}
                        </Button>
                    </li>
                ))}
                <li className="hide-sm">
                    <Button
                        partiallyActive
                        activeClassName={styles.active}
                        className={styles.link}
                        color="secondary"
                        component={Link}
                        to="/about"
                        variant="text"
                    >
                        about
                    </Button>
                </li>
                <li className="hide-sm">
                    <Button
                        partiallyActive
                        activeClassName={styles.active}
                        className={styles.link}
                        color="secondary"
                        component={Link}
                        to="/search"
                        variant="text"
                    >
                        search
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
