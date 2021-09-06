import { FC, useEffect, useMemo, useState } from 'react';

import styles from './OrderForm.module.scss';
import { OrderFormPropTypes } from './OrderForm.types';

import { cls } from '~/utils';


const memoForm = {
    firstname: '',
    lastname: '',
    organization: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    details: '',
};

export const OrderForm: FC<OrderFormPropTypes> = ({ onValidation }) => {

    const [firstname, setFirstname] = useState(memoForm.firstname);
    const [lastname, setLastname] = useState(memoForm.lastname);
    const [organization, setOrganization] = useState(memoForm.organization);
    const [email, setEmail] = useState(memoForm.email);
    const [phone, setPhone] = useState(memoForm.phone);
    const [country, setCountry] = useState(memoForm.country);
    const [address, setAddress] = useState(memoForm.address);
    const [details, setDetails] = useState(memoForm.details);

    const validation = useMemo(() => ({
        firstname: (/^[\w]{3,200}$/gi).test(firstname),
        lastname: (/^[\w]{3,200}$/gi).test(lastname),
        organization: (/^[\w\d .,;:'"`\-()]{0,200}$/gi).test(organization),
        email: (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi).test(email),
        phone: (/^[\d \-()]{3,200}$/gi).test(phone),
        country: (/^[\w- ]{3,200}$/gi).test(country),
        address: (/^[\w\d .,;:'"`\-()]{3,2000}$/gi).test(address),
        details: (/^[\w\d\s.,;:'"`\-()]{0,20000}$/gi).test(details),
    }), [firstname, lastname, organization, email, phone, country, address, details]);


    useEffect(() => {
        Object.assign(memoForm, {
            firstname, lastname, organization, email, phone, country, address, details,
        });
        const fieldsIsValid = Object.values(validation).every((isValidField) => isValidField);
        onValidation(fieldsIsValid);
    }, [firstname, lastname, organization, email, phone, country, address, details]);


    return (
        <form className={styles.form} >
            <div className={styles.inputColumns}>
                <div className={styles.inputGroup}>
                    <label
                        className={cls(
                            'input-group',
                            firstname.length > 3 && !validation.firstname && styles.error,
                        )}
                    >
                        First Name: <br />
                        <input
                            autoComplete="given-name"
                            name="firstname"
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <span>The first name must be between 3 and 200 latin letters long.</span>
                    </label>
                    <label
                        className={cls(
                            'input-group',
                            lastname.length > 3 && !validation.lastname && styles.error,
                        )}
                    >
                        Last Name: <br />
                        <input
                            autoComplete="family-name"
                            name="lastname"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <span>The last name must be between 3 and 200 latin letters long.</span>
                    </label>
                </div>
                <div className={styles.inputGroup}>
                    <label
                        className={cls(
                            'input-group',
                            organization.length > 3 && !validation.organization && styles.error,
                        )}
                    >
                        Organization: <br />
                        <input
                            autoComplete="organization"
                            name="organization"
                            type="text"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                        />
                        <span>The organization must be between 3 and 200 latin letters long.</span>
                    </label>
                </div>
                <div className={styles.inputGroup}>
                    <label
                        className={cls(
                            'input-group',
                            email.length > 3 && !validation.email && styles.error,
                        )}
                    >
                        E-mail: <br />
                        <input
                            autoComplete="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span>The field must be a valid e-mail address.</span>
                    </label>
                    <label
                        className={cls(
                            'input-group',
                            phone.length > 3 && !validation.phone && styles.error,
                        )}
                    >
                        Phone number: <br />
                        <input
                            autoComplete="tel"
                            name="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <span>The field must be a valid phone number.</span>
                    </label>
                </div>
                <div className={styles.inputGroup}>
                    <label
                        className={cls(
                            'input-group',
                            country.length > 3 && !validation.country && styles.error,
                        )}
                    >
                        Country: <br />
                        <input
                            autoComplete="country-name"
                            name="country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <span>The country must be between 3 and 200 latin letters long.</span>
                    </label>
                </div>
                <div className={styles.inputGroup}>
                    <label
                        className={cls(
                            'input-group',
                            address.length > 3 && !validation.address && styles.error,
                        )}
                    >
                        Address: <br />
                        <input
                            autoComplete="address-line1"
                            name="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <span>The address must be between 3 and 2000 latin letters long.</span>
                    </label>
                </div>
            </div>
            <div className={styles.inputColumns}>
                <div className={styles.inputGroup}>
                    <label
                        className={cls(
                            'input-group',
                            !validation.details && styles.error,
                        )}
                    >
                        Order details: <br />
                        <textarea
                            className={styles.textarea}
                            name="details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                        <span>The details must be between 3 and 20000 latin letters long.</span>
                    </label>
                </div>
            </div>
        </form>
    );
};
