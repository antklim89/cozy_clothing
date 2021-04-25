import { FC } from 'react';

import { CartProvider } from '../Cart/Cart.provider';

import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.scss';


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
