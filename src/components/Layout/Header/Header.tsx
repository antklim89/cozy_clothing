import { FC } from 'react';

import { NavBar } from './NavBar';
import { TopBar } from './TopBar';


export const Header: FC = () => {
    return (
        <header>
            <TopBar />
            <NavBar />
        </header>
    );
};
