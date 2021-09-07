import { FC } from 'react';

import styles from './Shadow.module.scss';
import { ShadowPropTypes } from './Shadow.types';


export const Shadow: FC<ShadowPropTypes> = ({ onClick, isShow = true }) => {
    if (!isShow) return null;
    return (
        <div
            className={styles.shadow}
            role="menu"
            tabIndex={-1}
            onClick={onClick}
            onKeyPress={() => null}
        />
    );
};
