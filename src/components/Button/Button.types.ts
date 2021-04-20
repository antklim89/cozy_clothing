import { HTMLAttributes } from 'react';


export interface ButtonPropTypes extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'outlined' | 'text'
    color?: 'primary' | 'secondary' | 'white' | 'black'
}

