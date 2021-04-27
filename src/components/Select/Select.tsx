import { FC } from 'react';


import style from './Select.module.scss';
import { SelectPropTypes } from './Select.types';


export const Select: FC<SelectPropTypes> = ({
    children,
    label,
    ...props
}) => {
    const id = (Math.random() * 10000).toString(32);
    return (
        <label className={style.root} htmlFor={id}>
            {label && (
                <span>
                    {label}
                    &nbsp;
                </span>
            )}
            <select
                id={id}
                {...props}
                className={props.className}
            >
                {children}
            </select>
        </label>
    );
};
