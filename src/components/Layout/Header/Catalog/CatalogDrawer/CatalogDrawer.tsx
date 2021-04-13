import { FC } from 'react';

import styles from './CatalogDrawer.module.scss';
import { CatalogDrawerPropTypes } from './CatalogDrawer.types';

import { cls } from '~/utils';


export const CatalogDrawer: FC<CatalogDrawerPropTypes> = ({
    isOpen,
    setIsOpen,
    children,
}) => {
    if (!isOpen) return null;
    return (
        <div>
            <div
                className={cls(styles.shadow, isOpen && styles.show)}
                role="menu"
                tabIndex={-1}
                onClick={() => setIsOpen(false)}
                onKeyPress={() => null}
            />
            {children}
        </div>
    );
};
