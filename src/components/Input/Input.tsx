import { ReactElement, useMemo } from 'react';


import style from './Input.module.scss';
import { InputPropTypes, SelectPropTypes, TextAreaPropTypes } from './Input.types';


export function Input(props: SelectPropTypes): ReactElement;
export function Input(props: InputPropTypes): ReactElement;
export function Input(props: TextAreaPropTypes): ReactElement;

export function Input({
    children,
    label,
    component = 'input',
    ...props
}: SelectPropTypes | InputPropTypes | TextAreaPropTypes): ReactElement {
    const id = useMemo(() => (Math.random() * 10000).toString(32), []);

    if (component === 'select') {
        return (
            <label className={style.root} htmlFor={id}>
                {label}
                <select
                    id={id}
                    {...props as SelectPropTypes}
                    className={props.className}
                >
                    {children}
                </select>
            </label>
        );
    }

    if (component === 'textarea') {
        return (
            <label className={style.root} htmlFor={id}>
                {label}
                <textarea
                    id={id}
                    rows={5}
                    {...props as TextAreaPropTypes}
                    className={props.className}
                />
            </label>
        );
    }

    return (
        <label className={style.root} htmlFor={id}>
            {label}
            <input
                id={id}
                {...props as InputPropTypes}
                className={props.className}
            />
        </label>
    );
}
