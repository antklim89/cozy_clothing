import { HTMLAttributes } from 'react';


export interface ContainerProps extends HTMLAttributes<HTMLElement> {
    component?: 'div'|'section'|'article'|'main'|'header'|'footer'|'aside'|'ul'|'li'|'nav'
    bottomSpace?: 'xs'|'sm'|'md'|'lg'|'xl'
}

