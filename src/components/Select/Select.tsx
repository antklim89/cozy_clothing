/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';

import style from './Select.module.scss';
import { SelectPropTypes } from './Select.types';


export const Select: FC<SelectPropTypes> = ({
    children,
    color = 'black',
    ...props
}) => {
    return (
        <select
            {...props}
            className={`${props.className} ${style.root} ${style[color]}`}
        >
            {children}
        </select>
    );
};
