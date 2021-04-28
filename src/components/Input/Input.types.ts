import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';


export interface SelectPropTypes extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    component: 'select'
}

export interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    component?: 'input'
}

