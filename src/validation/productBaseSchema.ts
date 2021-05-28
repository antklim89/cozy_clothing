import {
    string, number, object,
} from 'yup';


export const productBaseSchema = object({
    id: string().required(),
    title: string().required(),
    price: number().required(),
    type: string().required(),
    category: string().required(),
    careatedAt: string().required(),
    discount: number().min(0).max(100).required(),
}).required();
