import { FC } from 'react';

import styles from './Layout.module.scss';

import { CartProvider } from '~/components/CartProvider';
import { Footer } from '~/layouts/Footer';
import { Header } from '~/layouts/Header';


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
