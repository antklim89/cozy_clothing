import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';


export interface BasePropTypes {
    label?: string
}

export interface SelectPropTypes extends BasePropTypes, SelectHTMLAttributes<HTMLSelectElement> {
    component: 'select'
}

export interface InputPropTypes extends BasePropTypes, InputHTMLAttributes<HTMLInputElement> {
    component?: 'input'
}

export interface TextAreaPropTypes extends BasePropTypes, TextareaHTMLAttributes<HTMLTextAreaElement> {
    component?: 'textarea'
}

