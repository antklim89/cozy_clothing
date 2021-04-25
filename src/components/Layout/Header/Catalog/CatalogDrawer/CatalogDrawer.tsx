import { FC, useEffect } from 'react';

import { CatalogDrawerPropTypes } from './CatalogDrawer.types';

import { Shadow } from '~/components/Shadow';


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
            <Shadow onClick={() => setIsOpen(false)} />
            {children}
        </div>
    );
};
