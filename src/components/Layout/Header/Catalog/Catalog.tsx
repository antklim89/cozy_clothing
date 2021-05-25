import {
    FC, lazy, Suspense, useState,
} from 'react';

import styles from './Catalog.module.scss';

import HourglassEmptyIcon from '~/assets/hourglass_empty.svg';
import Menu from '~/assets/menu.svg';
import { Button } from '~/components/Button';


const CatalogDrawer = lazy(() => import('./CatalogDrawer/CatalogDrawer'));

export const Catalog: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.root}>
            <Button
                variant="text"
                onClick={() => setIsOpen(true)}
            >
                <Menu />
                <p className="hide-xs">Catalog</p>
            </Button>
            { isOpen && (
                <Suspense fallback={<HourglassEmptyIcon className={styles.icon} />}>
                    <CatalogDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
                </Suspense>
            )}
        </div>
    );
};
