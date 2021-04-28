import { FC } from 'react';

import styles from './StepperHeader.module.scss';
import { StepperHeaderPropTypes } from './StepperHeader.types';


export const StepperHeader: FC<StepperHeaderPropTypes> = ({ children }) => {
    return (
        <div className={styles.root}>{children}</div>
    );
};
