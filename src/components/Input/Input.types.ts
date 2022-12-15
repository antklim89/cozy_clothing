import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';


interface BaseProps {
     label?: string
     errorText?: string
     showError?: boolean
}

export interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
     as?: 'input'
}

export interface SelectProps extends BaseProps, SelectHTMLAttributes<HTMLSelectElement> {
     as: 'select'
}

export interface TextAreaProps extends BaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
     as: 'textarea'
}
