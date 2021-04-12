import { graphql, Link, useStaticQuery } from 'gatsby';
import { FC, useState } from 'react';


import styles from './Catalog.module.scss';
import { CatalogPropTypes, CatalogResponse } from './Catalog.types';

import { Button } from '~/components/Button';
import { cls, throwErr } from '~/utils';


export const Catalog: FC<CatalogPropTypes> = ({
    linksClassName,
    activeLinksClassName,
}) => {
    const { file } = useStaticQuery<GatsbyTypes.CatalogQuery>(graphql`
        query Catalog {
            file(name: {eq: "catalog"}) {
                publicURL
            }
        }
    `);
    const catalogURL = file?.publicURL || throwErr();

    const [isOpen, setIsOpen] = useState(false);
    const [catalog, setCatalog] = useState<null | CatalogResponse>(null);

    const handleOpen = async () => {
        if (!catalog) {
            const response = await fetch(catalogURL);
            const data: CatalogResponse = await response.json();
            setCatalog(data);
        }

        setIsOpen((prev) => !prev);
    };

    return (
        <li>
            <Button
                className={linksClassName}
                variant="text"
                onClick={handleOpen}
            >
                Catalog
            </Button>
            {catalog && (
                <>
                    <Button
                        className={cls(styles.shadow, isOpen && styles.show)}
                        tabIndex={-1}
                        variant="text"
                        onClick={() => setIsOpen(false)}
                        // onKeyPress={(e) => e.key === 'Esc' && setIsOpen(false)}
                    />
                    <ul className={cls(styles.subItemContainer, isOpen && styles.open)}>
                        {catalog.types.map((type: any) => (
                            <li key={type}>
                                <Link
                                    activeClassName={activeLinksClassName}
                                    className={linksClassName}
                                    to={`/category/${type}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {type}
                                </Link>
                                <ul>
                                    {catalog.categories.filter((category) => category.type === type).map((category) => (
                                        <li key={category.name + category.type}>
                                            <Link
                                                activeClassName={activeLinksClassName}
                                                className={linksClassName}
                                                to={`/category/${category.type}/${category.name}`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}

                    </ul>
                </>
            )}
        </li>
    );
};
