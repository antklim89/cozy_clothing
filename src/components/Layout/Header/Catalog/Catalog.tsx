import { FC, useState } from 'react';

import styles from './Catalog.module.scss';
import { CatalogDrawer } from './CatalogDrawer/CatalogDrawer';

import Menu from '~/assets/menu.svg';
import { Button } from '~/components/Button';


export const Catalog: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.root}>
            <Button
                aria-expanded={isOpen}
                aria-label="catalog"
                variant="text"
                onClick={() => setIsOpen(true)}
            >
                <Menu />
                <span className="hide-md">Catalog</span>
            </Button>
            { isOpen && (
                <CatalogDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
        </div>
    );
};
