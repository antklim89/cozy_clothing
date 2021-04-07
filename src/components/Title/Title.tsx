import { FC } from 'react';

import styles from './Title.module.scss';
import { TitleProps } from './Title.types';


export const Title: FC<TitleProps> = ({
    component: Component = 'h1',
    className,
    ...props
}) => {
    return (
        <div className={styles.root}>
            <Component {...props} className={className} />
        </div>
    );
};
