import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { CartButton } from './CartButton';
import { Catalog } from './Catalog';
import styles from './Header.module.scss';
import { NavBar } from './NavBar';

import { Container } from '~/components/Container';


export const Header: FC = () => {
    return (
        <>
            <header className={styles.background}>
                <Container className={styles.container}>
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
                </Container>
            </header>
            <div className={styles.height} />
        </>
    );
};
