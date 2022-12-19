import { FC } from 'react';

import Cart from '~/layouts/Cart';
import Seo from '~/layouts/Seo';


const CartPage: FC = () => {
    return (
        <main>
            <Seo title="Cart" />
            <Cart />
        </main>
    );
};

export default CartPage;
