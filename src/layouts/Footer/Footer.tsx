import { FC } from 'react';

import styles from './Footer.module.scss';


export const Footer: FC = () => {
    return (
        <footer className={styles.root}>
            <div className="container">
                <p>Copyright @ All right reserved </p>
            </div>
        </footer>
    );
};
