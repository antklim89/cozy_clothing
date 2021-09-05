import { FC } from 'react';

import styles from './Layout.module.scss';

import { CartProvider } from '~/components/cart/CartProvider';
import { Footer } from '~/components/layout/Footer';
import { Header } from '~/components/layout/Header';


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
