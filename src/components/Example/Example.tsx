import { FC } from 'react';

import style from './Example.module.scss';
import { ExamplePropTypes } from './Example.types';


export const Example: FC<ExamplePropTypes> = () => {
    return (
        <div className={style.root}>Example</div>
    );
};
