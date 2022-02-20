import { FC, useEffect, useMemo, useState } from 'react';

import styles from './OrderForm.module.scss';
import { OrderFormPropTypes } from './OrderForm.types';

import InputGroup from '~/components/InputGroup';


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
                    <InputGroup
                        className={(firstname.length > 3 && !validation.firstname && styles.error) || ''}
                    >
                        <input
                            autoComplete="given-name"
                            name="firstname"
                            placeholder="First Name"
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <span className={styles.errorMessage}>
                            The first name must be between 3 and 200 latin letters long.
                        </span>
                    </InputGroup>
                    <InputGroup
                        className={(lastname.length > 3 && !validation.lastname && styles.error) || ''}
                    >
                        <input
                            autoComplete="family-name"
                            name="lastname"
                            placeholder="Last Name"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <span className={styles.errorMessage}>
                            The last name must be between 3 and 200 latin letters long.
                        </span>
                    </InputGroup>
                </div>
                <div className={styles.inputGroup}>
                    <InputGroup
                        className={(organization.length > 3 && !validation.organization && styles.error) || ''}
                    >
                        <input
                            autoComplete="organization"
                            name="organization"
                            placeholder="Organization"
                            type="text"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                        />
                        <span className={styles.errorMessage}>
                            The organization must be between 3 and 200 latin letters long.
                        </span>
                    </InputGroup>
                </div>
                <div className={styles.inputGroup}>
                    <InputGroup
                        className={(email.length > 3 && !validation.email && styles.error) || ''}
                    >
                        <input
                            autoComplete="email"
                            name="email"
                            placeholder="E-mail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className={styles.errorMessage}>
                            The field must be a valid e-mail address.
                        </span>
                    </InputGroup>
                    <InputGroup
                        className={(phone.length > 3 && !validation.phone && styles.error) || ''}
                    >
                        <input
                            autoComplete="tel"
                            name="phone"
                            placeholder="Phone number"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <span className={styles.errorMessage}>
                            The field must be a valid phone number.
                        </span>
                    </InputGroup>
                </div>
                <div className={styles.inputGroup}>
                    <InputGroup
                        className={(country.length > 3 && !validation.country && styles.error) || ''}
                    >
                        <input
                            autoComplete="country-name"
                            name="country"
                            placeholder="Country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <span className={styles.errorMessage}>
                            The country must be between 3 and 200 latin letters long.
                        </span>
                    </InputGroup>
                </div>
                <div className={styles.inputGroup}>
                    <InputGroup
                        className={(address.length > 3 && !validation.address && styles.error) || ''}
                    >
                        <input
                            autoComplete="address-line1"
                            name="address"
                            placeholder="Address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <span className={styles.errorMessage}>
                            The address must be between 3 and 2000 latin letters long.
                        </span>
                    </InputGroup>
                </div>
            </div>
            <div className={styles.inputColumns}>
                <div className={styles.inputGroup}>
                    <InputGroup
                        className={(!validation.details && styles.error) || ''}
                    >
                        <textarea
                            className={styles.textarea}
                            name="details"
                            placeholder="Order details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                        <span className={styles.errorMessage}>
                            The details must be between 3 and 20000 latin letters long.
                        </span>
                    </InputGroup>
                </div>
            </div>
        </form>
    );
};
