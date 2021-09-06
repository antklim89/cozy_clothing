import { FC } from 'react';

import DoneIcon from '~/assets/done.svg';
import { CartList } from '~/components/CartList';
import { ConfirmOrder } from '~/components/ConfirmOrder';
import { Container } from '~/components/Container';
import { OrderForm } from '~/components/OrderForm';
import { Seo } from '~/components/Seo';
import { Step, Stepper, StepperHeader } from '~/components/Stepper';
import { Title } from '~/components/Title';


const cart: FC = () => {
    return (
        <main>
            <Seo title="Cart" />
            <Container topSpace="md">
                <Title>Cart</Title>
                <Stepper maxSteps={3}>
                    {({ step, setStep, completeStep, isStepCompleted, isPrevStepsCompleted }) => (
                        <>
                            <StepperHeader>
                                <button
                                    className="btn"
                                    type="button"
                                    onClick={() => setStep(1)}
                                >
                                    {isStepCompleted(1) && <DoneIcon />}
                                    Cart
                                </button>
                                <button
                                    className="btn"
                                    disabled={!isPrevStepsCompleted(1)}
                                    type="button"
                                    onClick={() => setStep(2)}
                                >
                                    {isStepCompleted(2) && <DoneIcon />}
                                    Form
                                </button>
                                <button
                                    className="btn"
                                    disabled={!isPrevStepsCompleted(2)}
                                    type="button"
                                    onClick={() => setStep(3)}
                                >
                                    Confirm
                                </button>
                            </StepperHeader>

                            <Step index={1} step={step}>
                                <CartList onChangeEmpty={(isEmpty) => completeStep(1, !isEmpty)} />
                            </Step>
                            <Step index={2} step={step}>
                                <OrderForm onValidation={(isValid) => completeStep(2, isValid)} />
                            </Step>
                            <Step index={3} step={step}>
                                <ConfirmOrder />
                            </Step>
                        </>
                    )}
                </Stepper>
            </Container>
        </main>
    );
};

export default cart;
