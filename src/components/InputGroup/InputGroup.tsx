import { FC } from 'react';


import { cls } from '~/utils';

import style from './InputGroup.module.scss';
import { InputGroupProps } from './types';


const InputGroup: FC<InputGroupProps> = ({ children, label, className }) => {
    return (
        <label className={cls(style.root, className)}>
            {label ? <span className={style.label}>{label}:</span> : null}
            {children}
        </label>
    );
};

export default InputGroup;

