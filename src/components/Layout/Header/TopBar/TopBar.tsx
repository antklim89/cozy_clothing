import { FC } from 'react';

import style from './TopBar.module.scss';

import { Button } from '~/components/Button';
import { Cart } from '~/components/Cart';
import { Container } from '~/components/Container';


export const TopBar: FC = () => {
    // const APIUrl = process.env.URL || 'https://cozy-clothing.netlify.app';
    // const handleIndentity = async () => {
    //     const { default: netlifyIdentity } = await import('netlify-identity-widget');

    //     netlifyIdentity.init({
    //         APIUrl,
    //         container: '#netlify-modal',
    //         locale: 'en',
    //     });

    //     netlifyIdentity.open('login');
    // };

    return (
        <div className={style.root}>
            <Container>
                <Button color="secondary" fontColor="light" variant="text">login | register</Button>
                <Cart />
                {/* <Button color="white" onClick={handleIndentity}>login/register</Button> */}
            </Container>
        </div>
    );
};
