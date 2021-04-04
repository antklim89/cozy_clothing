import { HTMLAttributes } from 'react';


export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'outlined' | 'text'
    color?: 'primary' | 'secondary' | 'white' | 'black'
}

