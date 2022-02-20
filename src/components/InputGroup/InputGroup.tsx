import { FC } from 'react';


import style from './InputGroup.module.scss';
import { InputGroupProps } from './types';

import { cls } from '~/utils';


const InputGroup: FC<InputGroupProps> = ({ children, label, className }) => {
    return (
        <label className={cls(style.root, className)}>
            {label && <span className={style.label}>{label}:</span>}
            {children}
        </label>
    );
};

export default InputGroup;

