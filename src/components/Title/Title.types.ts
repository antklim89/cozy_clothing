import { HTMLAttributes } from 'react';

import { ContainerProps } from '~/components/Container/Container.types';


export interface TitleProps extends HTMLAttributes<HTMLHRElement> {
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    position?: 'center' | 'tight' | 'left'
    bottomSpace?: ContainerProps['bottomSpace']
}

