import {
    HTMLAttributes,
    ReactNode,
    FunctionComponent,
    ComponentClass,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
} from 'react';


export type ButtonPropTypesAnchor = {
    component: 'a'
} & AnchorHTMLAttributes<HTMLAnchorElement> & ButtonPropTypes


export type ButtonPropTypesButton = {
    component: 'button'
} & ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropTypes


export type ButtonPropTypesWithComponent<T> = {
    component: Comp<T>
} & HTMLAttributes<T> & T & ButtonPropTypes


export type ButtonPropTypes = {
    variant?: 'outlined' | 'text' | 'contained'
    fontColor?: 'dark' | 'light'
    size?: 'small' | 'large'
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>


type Comp<P> = FunctionComponent<P> | ComponentClass<P>

