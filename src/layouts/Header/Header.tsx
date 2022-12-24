import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import styles from './Header.module.scss';
import HeaderCartButton from './HeaderCartButton';
import HeaderNavBar from './HeaderNavBar';
import Catalog from '~/layouts/Catalog';


const Header: FC = () => {
    return (
        <>
            <header className={styles.background}>
                <div className={styles.container}>
                    <Link aria-label="logo" className={styles.logo} to="/">
                        <StaticImage
                            alt="logo"
                            formats={['webp']}
                            layout="fixed"
                            placeholder="blurred"
                            src="./Header.logo.png"
                        />
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
