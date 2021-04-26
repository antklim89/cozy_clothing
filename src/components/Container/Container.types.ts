import { HTMLAttributes } from 'react';


export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    component?: 'div'|'section'|'article'|'main'|'header'|'footer'|'aside'|'ul'|'li'
}

