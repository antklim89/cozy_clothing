import { HTMLAttributes, FunctionComponent, ComponentClass, ReactElement } from 'react';


export interface ButtonFC {
    <P>(props: ButtonPropTypesWithComponent<P>): ReactElement
    <P>(props: ButtonPropTypes<P>): ReactElement
    <P>(props: ButtonAnchorPropTypes<P>): ReactElement
}

interface BaseButtonProps {
    variant?: 'outlined' | 'text' | 'contained'
    fontColor?: 'dark' | 'light'
    size?: 'small' | 'large'
    disabled?: boolean
    fullWidth?: boolean
}
type ButtonPropTypes<_> = BaseButtonProps & HTMLAttributes<HTMLButtonElement> & {
    component?: 'button'
}
type ButtonAnchorPropTypes<_> = BaseButtonProps & HTMLAttributes<HTMLAnchorElement> & {
    component?: 'a'
}

type ButtonPropTypesWithComponent<T> = HTMLAttributes<T> & T & BaseButtonProps & {
    component: FunctionComponent<T> | ComponentClass<T>
};
