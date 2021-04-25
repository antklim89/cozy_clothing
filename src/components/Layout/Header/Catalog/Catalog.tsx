import { graphql, Link, useStaticQuery } from 'gatsby';
import { FC, useState } from 'react';


import styles from './Catalog.module.scss';
import { CatalogPropTypes, CatalogResponse } from './Catalog.types';
import { CatalogDrawer } from './CatalogDrawer/CatalogDrawer';

import Menu from '~/assets/menu.svg';
import { Button } from '~/components/Button';
import { cls, throwErr } from '~/utils';


console.debug('||Menu: \n', Menu);


export const Catalog: FC<CatalogPropTypes> = ({
    linksClassName,
    activeLinksClassName,
}) => {
    const { file } = useStaticQuery<GatsbyTypes.CatalogQuery>(graphql`
        query Catalog {
            file(name: {eq: "categories"}) { publicURL }
        }
    `);
    const catalogURL = file?.publicURL || throwErr();

    const [isOpen, setIsOpen] = useState(false);
    const [catalog, setCatalog] = useState<null|CatalogResponse>(null);

    const handleOpen = async (): Promise<void> => {
        if (catalog) return setIsOpen((prev) => !prev);

        const response = await fetch(catalogURL);
        const data: CatalogResponse = await response.json();
        setIsOpen(true);
        return setCatalog(data);
    };

    if (!catalog) {
        return (
            <Button
                className={linksClassName}
                variant="text"
                onClick={handleOpen}
            >
                <Menu />
                {/* <i className="fas fa-bars" /> */}
                <p className="hide-xs">Catalog</p>
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
                {/* <i className="fas fa-bars" /> */}
                <Menu />
                <p className="hide-xs">Catalog</p>
            </Button>
            <CatalogDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <ul className={cls(styles.itemContainer, isOpen && styles.open)}>
                    {Object.keys(catalog).map((type) => (
                        <li key={type}>
                            <Button
                                activeClassName={activeLinksClassName}
                                className={linksClassName}
                                color="secondary"
                                component={Link}
                                to={`/category/${type}`}
                                variant="text"
                                onClick={() => setIsOpen(false)}
                            >
                                {type}
                            </Button>
                            <ul className={styles.subItemContainer}>
                                <hr />
                                {catalog[type].map(({ category }) => (
                                    <li key={category + type}>
                                        <Button
                                            activeClassName={activeLinksClassName}
                                            className={linksClassName}
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
            </CatalogDrawer>
        </li>
    );
};
