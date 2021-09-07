import { FC, useState } from 'react';

import styles from './Catalog.module.scss';
import { CatalogDrawer } from './CatalogDrawer/CatalogDrawer';

import Menu from '~/assets/menu.svg';


export const Catalog: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.root}>
            <button
                aria-expanded={isOpen}
                aria-label="catalog"
                className="btn text"
                type="button"
                onClick={() => setIsOpen(true)}
            >
                <span className="show-md"><Menu /></span>
                <span className="hide-md">Catalog</span>
            </button>
            { isOpen && (
                <CatalogDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
        </div>
    );
};
