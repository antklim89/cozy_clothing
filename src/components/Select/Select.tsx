import { FC } from 'react';


import style from './Select.module.scss';
import { SelectPropTypes } from './Select.types';

import { cls } from '~/utils';


export const Select: FC<SelectPropTypes> = ({
    children,
    label,
    ...props
}) => {
    const id = (Math.random() * 10000).toString(32);
    return (
        <label className={style.label} htmlFor={id}>
            {label && (
                <span>
                    {label}
                    &nbsp;
                </span>
            )}
            <select
                id={id}
                {...props}
                className={cls(props.className, style.root)}
            >
                {children}
            </select>
        </label>
    );
};
