import { FC } from 'react';

import styles from './StepperHeader.module.scss';


export const StepperHeader: FC = ({ children }) => {
    return (
        <div className={styles.root}>{children}</div>
    );
};
