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
