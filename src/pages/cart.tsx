import { HeadFC } from 'gatsby';
import { FC } from 'react';

import Cart from '~/layouts/Cart';
import Seo from '~/layouts/Seo';


const CartPage: FC = () => {
    return (
        <main>
            <Cart />
        </main>
    );
};

export const Head: HeadFC = () => (
    <Seo title="Cart" />
);

export default CartPage;
