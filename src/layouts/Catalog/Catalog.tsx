import { graphql, Link, useStaticQuery } from 'gatsby';
import { FC, useEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import Menu from '~/assets/menu.svg';
import Backdrop from '~/components/Backdrop';
import Button from '~/components/Button';
import { ICatalog } from '~/types/catalog';


const Catalog: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { catalog } = useStaticQuery<ICatalog>(graphql`
        query Catalog {
            catalog {
                girls
                boys
                men
                women
            }
        }
    `);

    useEffect(() => {
        function listener(e: KeyboardEvent) {
            if (e.key === 'Escape') setIsOpen(false);
        }
        window.addEventListener('keydown', listener);
        return () => window.removeEventListener('keydown', listener);
    }, []);

    return (
        <div className={styles.root}>
            <Button
                aria-expanded={isOpen}
                aria-label="catalog"
                className="text"
                data-cy="catalog-button"
                onClick={() => setIsOpen(true)}
            >
                <span className="show-md"><Menu /></span>
                <span className="hide-md">Catalog</span>
            </Button>
            <Backdrop isShow={isOpen} onClick={() => setIsOpen(false)} />
            { isOpen
                ? (
                    <nav className={styles.drawer} data-cy="catalog-window">
                        <ul className={styles.itemContainer}>
                            <li className="show-sm">
                                <Link
                                    className="btn text"
                                    data-cy="catalog-about-link"
                                    to="/about"
                                    onClick={() => setIsOpen(false)}
                                >
                                    about
                                </Link>
                            </li>
                            <li className="show-sm">
                                <Link
                                    className="btn text"
                                    data-cy="catalog-search-link"
                                    to="/search"
                                    onClick={() => setIsOpen(false)}
                                >
                                    search
                                </Link>
                            </li>
                        </ul>
                        <ul className={styles.itemContainer}>
                            {Object.entries(catalog).map(([type, products]) => (
                                <li key={type}>
                                    <Link
                                        className="btn text"
                                        data-cy="catalog-type-link"
                                        to={`/products/${type}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <b>{type}</b>
                                    </Link>
                                    <ul className={styles.subItemContainer}>
                                        <hr />
                                        {products.map((category) => (
                                            <li key={category + type}>
                                                <Link
                                                    className="btn text"
                                                    data-cy="catalog-category-link"
                                                    to={`/products/${type}/${category}`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {category}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )
                : null}
        </div>
    );
};

export default Catalog;
