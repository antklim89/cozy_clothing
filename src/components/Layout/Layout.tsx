import { FC } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.scss';


export const Layout: FC = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
