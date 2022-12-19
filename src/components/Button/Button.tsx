import { forwardRef, ForwardRefRenderFunction } from 'react';

import { cls } from '~/utils';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';


const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ size, variant, ...props }, ref) => {
    return (
        <button
            ref={ref}
            type="button"
            {...props}
            className={cls(styles.btn, size && styles[size], variant && styles[variant])}
        />
    );
};

export default forwardRef(Button);

