import * as yup from 'yup';


export const orderSchema = yup.object({
    details: yup
        .string()
        .min(5)
        .nullable(),
    country: yup
        .string()
        .label('Country')
        .min(5)
        .max(500)
        .required(),
    address: yup
        .string()
        .label('Address')
        .min(5)
        .max(500)
        .required(),
    phone: yup
        .string()
        .label('Phone')
        .matches(/^[\d\s]*$/ig, 'Not valid phone number.')
        .max(500)
        .required(),
    email: yup
        .string()
        .label('E-mail')
        .max(500)
        .email('Not valid e-mail.')
        .required(),
    organization: yup.string()
        .label('Company Name')
        .min(5)
        .nullable()
        .max(500),
    lastname: yup
        .string()
        .label('Last name')
        .min(3)
        .max(500)
        .required(),
    firstname: yup
        .string()
        .label('First Name')
        .min(3)
        .max(500)
        .required(),
}).required();
