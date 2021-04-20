import { FC } from 'react';

import style from './Button.module.scss';
import { ButtonPropTypes } from './Button.types';


export const Button: FC<ButtonPropTypes> = ({
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
