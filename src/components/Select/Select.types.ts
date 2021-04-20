import { HTMLAttributes } from 'react';


export interface SelectPropTypes extends HTMLAttributes<HTMLSelectElement> {
    color?: 'primary' | 'secondary' | 'white' | 'black'
}

