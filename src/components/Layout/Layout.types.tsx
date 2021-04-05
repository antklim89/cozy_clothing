import { HTMLAttributes } from 'react';


export interface LayoutPropTypes {
    description?: string;
    meta?: {
        name: string;
        content: string;
    }[];
    title: string;
    container?: boolean
    className?: string
}
