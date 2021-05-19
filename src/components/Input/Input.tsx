import { ReactElement, useMemo } from 'react';


import styles from './Input.module.scss';
import { InputPropTypes, SelectPropTypes, TextAreaPropTypes } from './Input.types';

import { cls } from '~/utils';


export function Input(props: SelectPropTypes): ReactElement;
export function Input(props: InputPropTypes): ReactElement;
export function Input(props: TextAreaPropTypes): ReactElement;

export function Input({
    label,
    component = 'input',
    ...props
}: SelectPropTypes | InputPropTypes | TextAreaPropTypes): ReactElement {
    const id = useMemo(() => (Math.random() * 10000).toString(32), []);

    return (
        <div className={cls(styles.root, props.className)}>
            {label && <label className={styles.label} htmlFor={id}>{label}</label>}
            {component === 'select' && (
                <select id={id} {...props as SelectPropTypes} />
            )}
            {component === 'textarea' && (
                <textarea id={id} {...props as TextAreaPropTypes} />
            )}
            {component === 'input' && (
                <input id={id} {...props as InputPropTypes} />
            )}
        </div>
    );
}
