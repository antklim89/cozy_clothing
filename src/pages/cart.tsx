import { FC } from 'react';

import { Button } from '~/components';
import { CartList } from '~/components/CartList';
import { Container } from '~/components/Container';
import { OrderForm } from '~/components/OrderForm';
import { Seo } from '~/components/Seo';
import { Step, Stepper } from '~/components/Stepper';
import { Title } from '~/components/Title';


const cart: FC = () => {
    return (
        <main>
            <Seo title="Cart" />
            <Title>Cart</Title>

            <Stepper maxSteps={3}>
                {({ step, setCanNextStep }) => (
                    <Container>
                        <div>
                            <Button>{(step === 1).toString()}</Button>
                            <Button>{(step === 2).toString()}</Button>
                            <Button>{(step === 3).toString()}</Button>
                        </div>
                        <Step index={1} step={step}>
                            <CartList onChangeEmpty={(isEmpty) => setCanNextStep(!isEmpty)} />
                        </Step>
                        <Step index={2} step={step}>
                            <OrderForm />
                        </Step>
                        <Step index={3} step={step}>
                            <div>OrderConfirm</div>
                        </Step>
                    </Container>
                )}
            </Stepper>

        </main>
    );
};

export default cart;
