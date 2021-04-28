import { FC } from 'react';

import styles from './OrderForm.module.scss';
import { OrderFormPropTypes } from './OrderForm.types';

import { Input } from '~/components/Input';


export const OrderForm: FC<OrderFormPropTypes> = () => {
    return (
        <div className={styles.root}>
            <div>
                <Input label="First Name" name="firstname" type="text" />
                <Input label="Last Name" name="lastname" type="text" />
            </div>
            <input name="companyname" type="text" />
            <input name="email" type="text" />
            <input name="phone" type="text" />
            <input name="country" type="text" />
            <input name="address" type="text" />
            <textarea name="notes" />
        </div>
    );
};
