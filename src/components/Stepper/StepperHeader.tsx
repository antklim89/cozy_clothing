import { FC, ReactNode } from 'react';

import styles from './StepperHeader.module.scss';


const StepperHeader: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <div className={styles.root}>{children}</div>
    );
};

export default StepperHeader;
