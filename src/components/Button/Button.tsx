/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';

import style from './Button.module.scss';
import { ButtonProps } from './Button.types';


export const Button: FC<ButtonProps> = ({
    children,
    variant = 'outlined',
    color = 'black',
    ...props
}) => {
    return (
        <button
            type="button"
            {...props}
            className={`${props.className} ${style.root} ${style[variant]} ${style[color]}`}
        >
            {children}
        </button>
    );
};
