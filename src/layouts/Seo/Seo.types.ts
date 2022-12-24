import { ReactNode } from 'react';


export interface SeoProps {
    children?: ReactNode
    description?: string;
    meta?: {
        name: string;
        content: string;
    }[];
    title: string;
    keywords?: string[]
}

export interface SeoQuery {
    info: {
        title: string
        description: string
        author: string
    }
}
