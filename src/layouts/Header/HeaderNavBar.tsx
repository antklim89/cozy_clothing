import { Link } from 'gatsby';
import { FC } from 'react';
import styles from './HeaderNavBar.module.scss';


const HeaderNavBar: FC = () => {
    return (
        <nav>
            <ul className={styles.nav}>
                {['men', 'women', 'boys', 'girls'].map((type) => (
                    <li className="hide-sm" key={type}>
                        <Link
                            partiallyActive
                            activeClassName={styles.active}
                            className={styles.link}
                            to={`/products/${type}`}
                        >
                            {type}
                        </Link>
                    </li>
                ))}
                <li className="hide-sm">
                    <Link
                        partiallyActive
                        activeClassName={styles.active}
                        className={styles.link}
                        to="/about"
                    >
                        about
                    </Link>
                </li>
                <li className="hide-sm">
                    <Link
                        partiallyActive
                        activeClassName={styles.active}
                        className={styles.link}
                        to="/search"
                    >
                        search
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavBar;
