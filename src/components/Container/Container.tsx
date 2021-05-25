import { FC } from 'react';

import styles from './Container.module.scss';
import { ContainerProps } from './Container.types';

import { cls } from '~/utils';


export const Container: FC<ContainerProps> = ({
    component: Component = 'div',
    className,
    bottomSpace,
    topSpace,
    ...props
}) => {
    return (
        <Component
            {...props}
            className={cls(
                styles.root,
                className,
                bottomSpace && styles[`bottom__${bottomSpace}`],
                topSpace && styles[`top__${topSpace}`],
            )}
        />
    );
};
