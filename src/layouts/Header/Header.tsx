import { Link } from 'gatsby';
import { FC } from 'react';
import styles from './Header.module.scss';
import HeaderCartButton from './HeaderCartButton';
import HeaderNavBar from './HeaderNavBar';
import Logo from '~/assets/logo.svg';
import Catalog from '~/layouts/Catalog';


const Header: FC = () => {
    return (
        <>
            <header className={styles.background}>
                <div className={styles.container}>
                    <Link aria-label="logo" className={styles.logo} to="/">
                        <Logo />
                    </Link>
                    <HeaderNavBar />
                    <div className="grow" />
                    <Catalog />
                    <HeaderCartButton />
                </div>
            </header>
            <div className={styles.height} />
        </>
    );
};

export default Header;
