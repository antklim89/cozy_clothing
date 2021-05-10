import { FC } from 'react';


import styles from './Title.module.scss';
import { TitleProps } from './Title.types';

import { cls } from '~/utils';


export const Title: FC<TitleProps> = ({
    component: Component = 'h1',
    position = 'center',
    className,
    ...props
}) => {
    return (
        <header
            className={cls(
                styles.root,
                styles[position],
            )}
        >
            <Component
                {...props}
                className={className}
            />
        </header>
    );
};
