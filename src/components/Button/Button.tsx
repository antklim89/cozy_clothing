import { ReactElement } from 'react';

import style from './Button.module.scss';
import {
    ButtonPropTypes,
    ButtonPropTypesWithComponent,
    ButtonPropTypesButton,
    ButtonPropTypesAnchor,
    ButtonPropTypesElement,
} from './Button.types';

import { cls } from '~/utils';


export function Button(props: ButtonPropTypesElement): ReactElement
export function Button(props: ButtonPropTypesAnchor): ReactElement
export function Button(props: ButtonPropTypesButton): ReactElement
export function Button<P>(props: ButtonPropTypesWithComponent<P>): ReactElement
export function Button(props: ButtonPropTypes): ReactElement
export function Button<P>({
    children,
    component: Component = 'button',
    variant = 'contained',
    fontColor = 'dark',
    size,
    fullWidth = false,
    disabled = false,
    ...props
}: ButtonPropTypesWithComponent<P> | ButtonPropTypesButton): ReactElement {
    console.debug(props);
    return (
        <Component
            {...props as P}
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
}
