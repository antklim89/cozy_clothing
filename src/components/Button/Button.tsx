import style from './Button.module.scss';
import { ButtonFC } from './Button.types';

import { cls } from '~/utils';


export const Button: ButtonFC = ({
    children,
    component: Component = 'button',
    variant = 'contained',
    fontColor = 'dark',
    size,
    fullWidth = false,
    disabled = false,
    ...props
}) => {
    return (
        <Component
            {...props as ButtonFC['arguments']}
            className={cls(
                props.className,
                style.root,
                style[variant],
                style[fontColor],
                fullWidth && style.fullWidth,
                disabled && style.disabled,
                size && style[size],
            )}
            disabled={disabled}
        >
            {children}
        </Component>
    );
};
