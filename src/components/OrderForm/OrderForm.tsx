import {
    ChangeEvent, FC, useEffect, useRef, useState,
} from 'react';

import styles from './OrderForm.module.scss';
import { OrderFormPropTypes } from './OrderForm.types';

import { Input } from '~/components/Input';


let formData = {};

export const OrderForm: FC<OrderFormPropTypes> = ({ onValidation }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string | null>(null);

    async function validate(data: Record<string, string>) {
        const { orderSchema } = await import('~/validation');

        try {
            const result = await orderSchema.validate(data, { stripUnknown: true });
            onValidation(true);
            setError(null);
            return { result };
        } catch (err) {
            onValidation(false);
            setError(err.message);
            return { error: err.message, result: err.value };
        }
    }

    useEffect(() => {
        onValidation(false);
        restoreForm(formRef.current, formData);
        validate(formData);
    }, []);

    const handleChangeForm = async (e: ChangeEvent<HTMLFormElement>) => {
        formData = formToObject(e.currentTarget);
        await validate(formData);
    };

    return (
        <>
            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}
            <form
                className={styles.form}
                ref={formRef}
                onChange={handleChangeForm}
            >
                <div className={styles.inputColumns}>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="given-name"
                            label="First Name"
                            name="firstname"
                            pattern="\\d"
                            type="text"
                        />
                        <Input
                            autoComplete="family-name"
                            label="Last Name"
                            name="lastname"
                            type="text"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="organization"
                            label="Organization"
                            name="organization"
                            type="text"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="email"
                            label="E-mail"
                            name="email"
                            type="email"
                        />
                        <Input
                            autoComplete="tel"
                            label="Phone number"
                            name="phone"
                            type="tel"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="country-name"
                            label="Country"
                            name="country"
                            type="text"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="address-line1"
                            label="Address"
                            name="address"
                            type="text"
                        />
                    </div>
                </div>
                <div className={styles.inputColumns}>
                    <div className={styles.inputGroup}>
                        <Input
                            className={styles.textarea}
                            component="textarea"
                            label="Order details"
                            name="details"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};


function restoreForm(form?: HTMLFormElement | null, data?: Record<string, string>): void {
    if (!form || !data) return;
    Array.from(form).forEach((item) => {
        if (item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement) {
            if (!data[item.name]) return;
            Object.assign(item, { value: data[item.name] });
        }
    });
}

function formToObject(form: HTMLFormElement): Record<string, string> {
    return Array.from(form).reduce((acc, item) => {
        if (item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement) {
            return { ...acc, [item.name]: item.value || undefined };
        }
        return acc;
    }, {});
}
