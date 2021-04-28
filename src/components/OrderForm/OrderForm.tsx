import { ChangeEvent, FC, useRef } from 'react';
import * as yup from 'yup';

import styles from './OrderForm.module.scss';
import { OrderFormPropTypes } from './OrderForm.types';

import { Input } from '~/components/Input';


export const OrderForm: FC<OrderFormPropTypes> = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleChangeForm = (e: ChangeEvent<HTMLFormElement>) => {
        const schema = yup.object({
            firstname: yup.string().required(),
        }).required();

        const data = Array.from(e.currentTarget).reduce((acc, item) => {
            if (item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement) {
                return { ...acc, [item.name]: item.value };
            }
            return acc;
        }, {});

        const result = schema.validateSync(data);

        console.debug('||e: \n', result);
    };

    return (
        <form className={styles.root} ref={formRef} onChange={handleChangeForm}>
            <div className={styles.customerData}>
                <div className={styles.inputGroup}>
                    <Input label="First Name" name="firstname" type="text" />
                    <Input label="Last Name" name="lastname" type="text" />
                </div>
                <Input label="Company Name" name="companyname" type="text" />
                <div className={styles.inputGroup}>
                    <Input label="E-mail" name="email" type="email" />
                    <Input label="Phone number" name="phone" type="phone" />
                </div>
                <Input label="Country" name="country" type="text" />
                <Input label="Address" name="address" type="text" />
            </div>
            <div className={styles.orderDetail}>
                <Input component="textarea" label="Order details" name="details" />
            </div>
        </form>
    );
};
