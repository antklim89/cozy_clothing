import { FC, ReactNode } from 'react';

import styles from './StepperHeader.module.scss';


export const StepperHeader: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <div className={styles.root}>{children}</div>
    );
};
