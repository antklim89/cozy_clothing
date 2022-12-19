import { FC } from 'react';

import styles from './Backdrop.module.scss';
import { BackdropPropTypes } from './Backdrop.types';


const Backdrop: FC<BackdropPropTypes> = ({ onClick, isShow = true }) => {
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

export default Backdrop;
