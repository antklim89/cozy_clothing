import { FC } from 'react';

import { CartList } from '~/components/CartList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';


const index: FC = () => {
    return (
        <main>
            <Seo title="Cart" />
            <Title>Cart</Title>
            <CartList />
        </main>
    );
};

export default index;
