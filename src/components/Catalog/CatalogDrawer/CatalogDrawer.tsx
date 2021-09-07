import { graphql, Link, useStaticQuery } from 'gatsby';
import { FC, useEffect } from 'react';

import styles from './CatalogDrawer.module.scss';
import { CatalogDrawerPropTypes } from './CatalogDrawer.types';

import { Shadow } from '~/components/Shadow';


type ProductTypes = 'boys'|'girls'|'men'|'women';

interface CatalogQuery {
    catalog: Record<ProductTypes, string[]>
}

export const CatalogDrawer: FC<CatalogDrawerPropTypes> = ({ setIsOpen }) => {
    const { catalog } = useStaticQuery<CatalogQuery>(graphql`
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
        const listener = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', listener);
        return () => window.removeEventListener('keydown', listener);
    }, []);

    return (
        <>
            <Shadow onClick={() => setIsOpen(false)} />
            <nav className={styles.root}>
                <ul className={styles.itemContainer}>
                    <li className="show-sm">
                        <Link
                            className="btn text"
                            to="/about"
                            onClick={() => setIsOpen(false)}
                        >
                            about
                        </Link>
                    </li>
                    <li className="show-sm">
                        <Link
                            className="btn text"
                            to="/search"
                            onClick={() => setIsOpen(false)}
                        >
                            search
                        </Link>
                    </li>
                </ul>
                <ul className={styles.itemContainer}>
                    {Object.keys(catalog).map((type) => (
                        <li key={type}>
                            <Link
                                className="btn text"
                                to={`/products/${type}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <b>{type}</b>
                            </Link>
                            <ul className={styles.subItemContainer}>
                                <hr />
                                {catalog[type as ProductTypes]?.map((category) => (
                                    <li key={category + type}>
                                        <Link
                                            className="btn text"
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
        </>
    );
};
