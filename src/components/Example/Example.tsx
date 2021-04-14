import { FC } from 'react';

import styles from './Example.module.scss';
import { ExamplePropTypes } from './Example.types';


export const Example: FC<ExamplePropTypes> = () => {
    return (
        <div className={styles.root}>Example</div>
    );
};
