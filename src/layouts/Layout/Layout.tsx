import { FC, ReactNode } from 'react';

import { CartProvider } from '~/components/CartProvider';
import { Footer } from '~/layouts/Footer';
import { Header } from '~/layouts/Header';

import styles from './Layout.module.scss';


export const Layout: FC<{children: ReactNode}> = ({ children }) => {
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
