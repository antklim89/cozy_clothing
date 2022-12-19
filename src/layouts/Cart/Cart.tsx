import { FC } from 'react';

import DoneIcon from '~/assets/done.svg';
import Button from '~/components/Button';
import { Step, Stepper, StepperHeader } from '~/components/Stepper';
import Title from '~/components/Title';

import CartList from './CartList';
import CartOrderConfirm from './CartOrderConfirm';
import CartOrderForm from './CartOrderForm';


const Cart: FC = () => {
    return (
        <section className="container mt-3">
            <Title>Cart</Title>
            <Stepper maxSteps={3}>
                {({ step, setStep, completeStep, isStepCompleted, isPrevStepsCompleted }) => (
                    <>
                        <StepperHeader>
                            <Button onClick={() => setStep(1)}>
                                {isStepCompleted(1) && <DoneIcon />}
                                Cart
                            </Button>
                            <Button disabled={!isPrevStepsCompleted(1)} onClick={() => setStep(2)}>
                                {isStepCompleted(2) && <DoneIcon />}
                                Form
                            </Button>
                            <Button disabled={!isPrevStepsCompleted(2)} onClick={() => setStep(3)}>
                                Confirm
                            </Button>
                        </StepperHeader>

                        <Step index={1} step={step}>
                            <CartList onChangeEmpty={(isEmpty) => completeStep(1, !isEmpty)} />
                        </Step>
                        <Step index={2} step={step}>
                            <CartOrderForm onValidation={(isValid) => completeStep(2, isValid)} />
                        </Step>
                        <Step index={3} step={step}>
                            <CartOrderConfirm />
                        </Step>
                    </>
                )}
            </Stepper>
        </section>
    );
};

export default Cart;
