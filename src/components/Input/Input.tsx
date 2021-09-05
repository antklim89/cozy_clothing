import { ReactElement, useMemo } from 'react';

import styles from './Input.module.scss';
import { InputPropTypes, SelectPropTypes, TextAreaPropTypes } from './Input.types';

import { cls } from '~/utils';


interface Props {
    (props: SelectPropTypes): ReactElement;
    (props: InputPropTypes): ReactElement;
    (props: TextAreaPropTypes): ReactElement;
}


export const Input: Props = ({
    label,
    component = 'input',
    ...props
}): ReactElement => {
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
};
