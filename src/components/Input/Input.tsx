import { ReactElement } from 'react';


import style from './Input.module.scss';
import { InputPropTypes, SelectPropTypes } from './Input.types';


export function Input(props: SelectPropTypes): ReactElement;
export function Input(props: InputPropTypes): ReactElement;

export function Input({
    children,
    label,
    component = 'input',
    ...props
}: SelectPropTypes | InputPropTypes): ReactElement {
    const id = (Math.random() * 10000).toString(32);
    return (
        <label className={style.root} htmlFor={id}>
            {label}
            {component === 'select' ? (
                <select
                    id={id}
                    {...props as SelectPropTypes}
                    className={props.className}
                >
                    {children}
                </select>
            ) : (
                <input
                    id={id}
                    {...props as InputPropTypes}
                    className={props.className}
                />
            )}
        </label>
    );
}
