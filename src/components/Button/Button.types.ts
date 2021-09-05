import { HTMLAttributes, FunctionComponent, ComponentClass, ReactElement } from 'react';


export interface ButtonFC {
    <P>(props: ButtonPropTypesWithComponent<P>): ReactElement
    (props: ButtonPropTypes): ReactElement
    (props: ButtonAnchorPropTypes): ReactElement
}

export interface BaseButtonProps extends HTMLAttributes<HTMLElement> {
    variant?: 'outlined' | 'text' | 'contained'
    fontColor?: 'dark' | 'light'
    size?: 'small' | 'large'
    disabled?: boolean
    fullWidth?: boolean
}
export type ButtonPropTypes = BaseButtonProps & HTMLAttributes<HTMLButtonElement> & {
    component?: 'button'
}
export type ButtonAnchorPropTypes = BaseButtonProps & HTMLAttributes<HTMLAnchorElement> & {
    component: 'a'
}

export type ButtonPropTypesWithComponent<T> = HTMLAttributes<T> & T & BaseButtonProps & {
    component: FunctionComponent<T> | ComponentClass<T>
};
