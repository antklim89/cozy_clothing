import { createElement, FC, useId } from 'react';
import style from './Input.module.scss';
import { InputProps, SelectProps, TextAreaProps } from './Input.types';
import { cls } from '~/utils';


const Input: FC<InputProps|SelectProps|TextAreaProps> = ({
    label, as = 'input', errorText, showError, className, ...props
}) => {
    const id = useId();

    return (
        <div className={cls(style.root)}>
            {label ? <label className={style.label} htmlFor="id">{label}:</label> : null}
            {createElement(as, {
                className: cls(style.input, className, showError && style.error),
                ...props,
                id,
            })}
            {showError
                ? (
                    <span className={style.errorText}>
                        {errorText}
                    </span>
                )
                : null}
        </div>
    );
};

export default Input;

