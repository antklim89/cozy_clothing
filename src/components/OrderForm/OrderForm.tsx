import {
    ChangeEvent, FC, MouseEvent, useEffect, useMemo, useRef, useState,
} from 'react';
import { ValidationError } from 'yup';

import styles from './OrderForm.module.scss';
import { OrderFormPropTypes } from './OrderForm.types';

import { Input } from '~/components/Input';


// let formData = {};

export const OrderForm: FC<OrderFormPropTypes> = ({ onValidation }) => {
    // const formRef = useRef<HTMLFormElement>(null);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [details, setDetails] = useState('');

    const form = useMemo(() => ({
        firstname: (/^[\w]*$/gi).test(firstname),
        lastname: (/^[\w]*$/gi).test(lastname),
        organization: (/^[\w\d\s]*$/gi).test(organization),
        email: (/^[\w\d\s]*$/gi).test(email),
        phone: (/^[\w\d\s]*$/gi).test(phone),
        country: (/^[\w\d\s]*$/gi).test(country),
        address: (/^[\w\d\s]*$/gi).test(address),
        details: (/^[\w\d\s]*$/gi).test(details),
    }), [firstname, lastname, organization, email, phone, country, address, details]);

    const [error, setError] = useState<string | null>(null);

    async function validate(data: Record<string, string>) {
        // const { orderSchema } = await import('~/validation');

        // try {
        //     const result = await orderSchema.validate(data, { stripUnknown: true });
        //     onValidation(true);
        //     setError(null);
        //     return { result };
        // } catch (err) {
        //     if (err instanceof ValidationError) {
        //         onValidation(false);
        //         setError(err.message);
        //         return { error: err.message, result: err.value };
        //     }
        //     throw err;
        // }
    }

    useEffect(() => {
        onValidation(false);
        // restoreForm(formRef.current, formData);
        // validate(formData);
    }, []);

    const handleChangeForm = async (e: ChangeEvent<HTMLFormElement>) => {
        // formData = formToObject(e.currentTarget);
        // await validate(formData);
        // console.debug('e: \n', e);
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
                onChange={handleChangeForm}
            >
                <div className={styles.inputColumns}>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="given-name"
                            label="First Name"
                            name="firstname"
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <Input
                            autoComplete="family-name"
                            label="Last Name"
                            name="lastname"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="organization"
                            label="Organization"
                            name="organization"
                            type="text"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="email"
                            label="E-mail"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            autoComplete="tel"
                            label="Phone number"
                            name="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="country-name"
                            label="Country"
                            name="country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <Input
                            autoComplete="address-line1"
                            label="Address"
                            name="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    );
};


// function restoreForm(form?: HTMLFormElement | null, data?: Record<string, string>): void {
//     if (!form || !data) return;
//     Array.from(form).forEach((item) => {
//         if (item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement) {
//             if (!data[item.name]) return;
//             Object.assign(item, { value: data[item.name] });
//         }
//     });
// }

// function formToObject(form: HTMLFormElement): Record<string, string> {
//     return Array.from(form).reduce<Record<string, string>>((acc, item) => {
//         if (item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement) {
//             // return { ...acc, [item.name]: item.value || undefined };
//             acc[item.name] = item.value
//             return acc
//         }
//         return acc;
//     }, {});
// }
