import { createElement, FC } from 'react';

import { ContainerProps } from './Container.types';

import { cls } from '~/utils';


export const Container: FC<ContainerProps> = ({
    component = 'div',
    className,
    ...props
}) => {
    return (
        createElement(component, { ...props, className: cls('container', className) })
    );
};
