import { graphql, Link, useStaticQuery } from 'gatsby';
import { FC, useState } from 'react';


import styles from './Catalog.module.scss';
import { CatalogPropTypes, CatalogResponse } from './Catalog.types';
import { CatalogDrawer } from './CatalogDrawer/CatalogDrawer';

import menuIcon from '~/assets/menu.svg';
import { Button } from '~/components/Button';
import { cls, throwErr } from '~/utils';


export const Catalog: FC<CatalogPropTypes> = ({
    linksClassName,
    activeLinksClassName,
}) => {
    const { file } = useStaticQuery<GatsbyTypes.CatalogQuery>(graphql`
        query Catalog {
            file(name: {eq: "categories"}) {
                publicURL
            }
        }
    `);
    const catalogURL = file?.publicURL || throwErr();

    const [isOpen, setIsOpen] = useState(false);
    const [catalog, setCatalog] = useState<null|CatalogResponse>(null);

    const handleOpen = async () => {
        if (!catalog) {
            const response = await fetch(catalogURL);
            const data: CatalogResponse = await response.json();
            setCatalog(data);
        }

        setIsOpen((prev) => !prev);
    };

    if (!catalog) {
        return (
            <Button
                className={linksClassName}
                variant="text"
                onClick={handleOpen}
            >
                <img alt="=" className="icon" src={menuIcon} />
                Catalog
            </Button>
        );
    }

    return (
        <li>
            <Button
                className={linksClassName}
                variant="text"
                onClick={handleOpen}
            >
                <img alt="=" className="icon" src={menuIcon} />
                <p className="hide-xs">Catalog</p>
            </Button>
            <CatalogDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <ul className={cls(styles.itemContainer, isOpen && styles.open)}>
                    {Object.keys(catalog).map((type) => (
                        <li key={type}>
                            <Link
                                activeClassName={activeLinksClassName}
                                className={linksClassName}
                                to={`/category/${type}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {type}
                            </Link>
                            <ul className={styles.subItemContainer}>
                                <hr />
                                {catalog[type].map(({ category }) => (
                                    <li key={category + type}>
                                        <Link
                                            activeClassName={activeLinksClassName}
                                            className={linksClassName}
                                            to={`/category/${type}/${category}`}
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
            </CatalogDrawer>
        </li>
    );
};
