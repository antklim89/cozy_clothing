import { FC } from 'react';

import { BackdropPropTypes } from './Backdrop.types';
import styles from './Shadow.module.scss';


export const Backdrop: FC<BackdropPropTypes> = ({ onClick, isShow = true }) => {
    if (!isShow) return null;
    return (
        <div
            className={styles.backdrop}
            role="menu"
            tabIndex={-1}
            onClick={onClick}
            onKeyPress={() => null}
        />
    );
};
