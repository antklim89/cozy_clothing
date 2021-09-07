import { FC } from 'react';

import { Title } from '~/components/Title';
import { CartStepper } from '~/layouts/CartStepper';
import { Seo } from '~/layouts/Seo';


const cart: FC = () => {
    return (
        <main>
            <Seo title="Cart" />
            <section className="container mt-3">
                <Title>Cart</Title>
                <CartStepper />
            </section>
        </main>
    );
};

export default cart;
