import { FC } from 'react';

import style from './Select.module.scss';
import { SelectPropTypes } from './Select.types';


export const Select: FC<SelectPropTypes> = ({
    children,
    ...props
}) => {
    return (
        <select
            {...props}
            className={`${props.className} ${style.root}`}
        >
            {children}
        </select>
    );
};
