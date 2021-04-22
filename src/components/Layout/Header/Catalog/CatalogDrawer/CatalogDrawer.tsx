import { FC, useEffect } from 'react';

import styles from './CatalogDrawer.module.scss';
import { CatalogDrawerPropTypes } from './CatalogDrawer.types';

import { cls } from '~/utils';


export const CatalogDrawer: FC<CatalogDrawerPropTypes> = ({
    isOpen,
    setIsOpen,
    children,
}) => {
    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.key === 'Escape')setIsOpen(false);
        };
        if (isOpen) window.addEventListener('keydown', listener);
        return () => window.removeEventListener('keydown', listener);
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <div>
            <div
                className={cls(styles.shadow)}
                role="menu"
                tabIndex={-1}
                onClick={() => setIsOpen(false)}
                onKeyPress={() => null}
            />
            {children}
        </div>
    );
};
