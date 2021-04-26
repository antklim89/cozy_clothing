import { FC } from 'react';


import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.scss';

import { CartProvider } from '~/components/CartProvider';


export const Layout: FC = ({ children }) => {
    return (
        <div className={styles.root}>
            <CartProvider>
                <Header />
                {children}
                <Footer />
            </CartProvider>
        </div>
    );
};
