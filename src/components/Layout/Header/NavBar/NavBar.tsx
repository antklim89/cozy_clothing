import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';


import styles from './NavBar.module.scss';
import { NavBarPropTypes } from './NavBar.types';

import { Button } from '~/components/Button';
import { productTypes } from '~/constants';


export const NavBar: FC<NavBarPropTypes> = () => {
    return (
        <nav>
            <ul className={styles.nav}>
                <li className={styles.logo}>
                    <Link to="/">
                        <StaticImage
                            alt="logo"
                            formats={['webp']}
                            layout="fixed"
                            placeholder="blurred"
                            src="./logo.png"
                        />
                    </Link>
                </li>
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
                <li>
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
            </ul>
        </nav>
    );
};
