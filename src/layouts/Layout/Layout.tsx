import { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';
import CartProvider from '~/components/CartProvider';
import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';


const Layout: FC<{children: ReactNode}> = ({ children }) => {
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

export default Layout;
