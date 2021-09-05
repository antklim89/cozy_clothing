import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { CartButton } from './CartButton';
import styles from './Header.module.scss';
import { NavBar } from './NavBar';

import { Catalog } from '~/components/layout/Catalog';


export const Header: FC = () => {
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
                            src="./logo.png"
                        />
                    </Link>
                    <NavBar />
                    <div className="grow" />
                    <Catalog />
                    <CartButton />
                </div>
            </header>
            <div className={styles.height} />
        </>
    );
};
