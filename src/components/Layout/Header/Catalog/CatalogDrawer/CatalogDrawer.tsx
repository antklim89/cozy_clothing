import { graphql, Link, useStaticQuery } from 'gatsby';
import { FC, useEffect } from 'react';

import styles from './CatalogDrawer.module.scss';
import { CatalogDrawerPropTypes } from './CatalogDrawer.types';

import { Button } from '~/components/Button';
import { Shadow } from '~/components/Shadow';
import { throwErr } from '~/utils';


export const CatalogDrawer: FC<CatalogDrawerPropTypes> = ({ setIsOpen }) => {
    const { productCatalog } = useStaticQuery<any>(graphql`
            query Catalog {
                catalog {
                    boys
                    girls
                    men
                    women
                }
            }
    `);
    const catalog = productCatalog?.catalog || throwErr();
    // useEffect(() => {
    //     const { href } = window.location;
    //     window.location.hash = 'catalog';
    //     const listener = () => {
    //         setIsOpen(false);
    //     };
    //     window.addEventListener('popstate', listener);
    //     return () => {
    //         window.history.pushState(null, '', href);
    //         window.removeEventListener('popstate', listener);
    //     };
    // }, []);

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
                        <Button
                            component={Link}
                            to="/about"
                            variant="text"
                            onClick={() => setIsOpen(false)}
                        >
                            about
                        </Button>
                    </li>
                    <li className="show-sm">
                        <Button
                            component={Link}
                            to="/search"
                            variant="text"
                            onClick={() => setIsOpen(false)}
                        >
                            search
                        </Button>
                    </li>
                </ul>
                <ul className={styles.itemContainer}>
                    {Object.keys(catalog).map((type) => (
                        <li key={type}>
                            <Button
                                color="secondary"
                                component={Link}
                                to={`/category/${type}`}
                                variant="text"
                                onClick={() => setIsOpen(false)}
                            >
                                <b>{type}</b>
                            </Button>
                            <ul className={styles.subItemContainer}>
                                <hr />
                                {catalog[type as keyof typeof catalog]?.map((category: any) => (
                                    <li key={category + type}>
                                        <Button
                                            color="secondary"
                                            component={Link}
                                            to={`/category/${type}/${category}`}
                                            variant="text"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {category}
                                        </Button>
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

export default CatalogDrawer;
