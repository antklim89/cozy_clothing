import { FC } from 'react';
import styles from './Title.module.scss';
import { TitleProps } from './Title.types';
import { cls } from '~/utils';


const Title: FC<TitleProps> = ({
    component: Component = 'h1',
    position = 'center',
    bottomSpace = 'sm',
    className,
    ...props
}) => {
    return (
        <div
            className={cls(
                styles.root,
                styles[position],
                bottomSpace && styles[`bottom__${bottomSpace}`],
            )}
        >
            <Component
                {...props}
                className={className}
            />
        </div>
    );
};

export default Title;
