import { FC } from 'react';

import DoneIcon from '~/assets/done.svg';
import { CartList } from '~/components/cart/CartList';
import { Seo } from '~/components/layout/Seo';
import { ConfirmOrder } from '~/components/order/ConfirmOrder';
import { OrderForm } from '~/components/order/OrderForm';
import { Step, Stepper, StepperHeader } from '~/components/ui/Stepper';
import { Title } from '~/components/ui/Title';


const cart: FC = () => {
    return (
        <main>
            <Seo title="Cart" />
            <div className="container mt-3">
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
            </div>
        </main>
    );
};

export default cart;
