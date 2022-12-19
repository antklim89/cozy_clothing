import { FC, useEffect, useMemo, useState } from 'react';

import Input from '~/components/Input';

import styles from './CartOrderForm.module.scss';
import { CartOrderFormProps } from './CartOrderForm.types';


export const CartOrderForm: FC<CartOrderFormProps> = ({ onValidation }) => {
    const [firstname, setFirstname] = useState(() => sessionStorage.getItem('firstname') || '');
    const [lastname, setLastname] = useState(() => sessionStorage.getItem('lastname') || '');
    const [organization, setOrganization] = useState(() => sessionStorage.getItem('organization') || '');
    const [email, setEmail] = useState(() => sessionStorage.getItem('email') || '');
    const [phone, setPhone] = useState(() => sessionStorage.getItem('phone') || '');
    const [country, setCountry] = useState(() => sessionStorage.getItem('country') || '');
    const [address, setAddress] = useState(() => sessionStorage.getItem('address') || '');
    const [details, setDetails] = useState(() => sessionStorage.getItem('details') || '');

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
        sessionStorage.setItem('firstname', firstname);
        sessionStorage.setItem('lastname', lastname);
        sessionStorage.setItem('organization', organization);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('phone', phone);
        sessionStorage.setItem('country', country);
        sessionStorage.setItem('address', address);
        sessionStorage.setItem('details', details);

        const fieldsIsValid = Object.values(validation).every((isValidField) => isValidField);
        onValidation(fieldsIsValid);
    }, [firstname, lastname, organization, email, phone, country, address, details]);


    return (
        <form className={styles.form} >
            <div className={styles.inputColumns}>
                <div className={styles.inputGroup}>
                    <Input
                        autoComplete="given-name"
                        errorText="The first name must be between 3 and 200 latin letters long."
                        name="firstname"
                        placeholder="First Name"
                        showError={firstname.length > 3 && !validation.firstname}
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <Input
                        autoComplete="family-name"
                        errorText="The last name must be between 3 and 200 latin letters long."
                        name="lastname"
                        placeholder="Last Name"
                        showError={lastname.length > 3 && !validation.lastname}
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <Input
                        autoComplete="organization"
                        errorText="The organization must be between 3 and 200 latin letters long."
                        name="organization"
                        placeholder="Organization"
                        showError={organization.length > 3 && !validation.organization}
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <Input
                        autoComplete="email"
                        errorText="The field must be a valid e-mail address."
                        name="email"
                        placeholder="E-mail"
                        showError={email.length > 3 && !validation.email}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        autoComplete="tel"
                        errorText="The field must be a valid phone number."
                        name="phone"
                        placeholder="Phone number"
                        showError={phone.length > 3 && !validation.phone}
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <Input
                        autoComplete="country-name"
                        errorText="The country must be between 3 and 200 latin letters long."
                        name="country"
                        placeholder="Country"
                        showError={country.length > 3 && !validation.country}
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <Input
                        autoComplete="address-line1"
                        errorText="The address must be between 3 and 2000 latin letters long."
                        name="address"
                        placeholder="Address"
                        showError={address.length > 3 && !validation.address}
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.inputColumns}>
                <div className={styles.inputGroup}>
                    <Input
                        as="textarea"
                        className={styles.textarea}
                        errorText="The details must be between 3 and 20000 latin letters long."
                        name="details"
                        placeholder="Order details"
                        showError={address.length > 3 && !validation.details}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>
            </div>
        </form>
    );
};
