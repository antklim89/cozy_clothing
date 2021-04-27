import { ReactElement } from 'react';

import style from './Button.module.scss';
import {
    ButtonPropTypes,
    ButtonPropTypesWithComponent,
    ButtonPropTypesButton,
    ButtonPropTypesAnchor,
} from './Button.types';

import { cls } from '~/utils';


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
    ...props
}: ButtonPropTypesWithComponent<P> | ButtonPropTypesButton): ReactElement {
    return (
        <Component
            type="button"
            {...props as P}
            className={cls(
                props.className,
                style.root,
                style[variant],
                style[fontColor],
                size && style[size],
            )}
        >
            {children}
        </Component>
    );
}
