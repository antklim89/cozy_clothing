import { FC } from 'react';

import { CartButton } from './CartButton';
import { Catalog } from './Catalog';
import style from './Header.module.scss';
import { NavBar } from './NavBar';

import { Container } from '~/components/Container';


export const Header: FC = () => {
    return (
        <div className={style.background}>
            <Container className={style.container}>
                <NavBar />
                <div className="grow" />
                <Catalog />
                <CartButton />
            </Container>
        </div>
    );
};
