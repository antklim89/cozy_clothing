import { ButtonHTMLAttributes } from 'react';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'underline' | 'text'
    size?: 'small' | 'large'
}

