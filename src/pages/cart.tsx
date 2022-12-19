import { FC } from 'react';

import { Cart } from '~/layouts/Cart';
import { Seo } from '~/layouts/Seo';


const cart: FC = () => {
    return (
        <main>
            <Seo title="Cart" />
            <Cart />
        </main>
    );
};

export default cart;
