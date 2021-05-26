import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
    string, number, array, object, mixed,
} from 'yup';


export const productPreviewSchema = object({
    id: string().required(),
    title: string().required(),
    price: number().required(),
    type: string().required(),
    category: string().required(),
    careatedAt: string().required(),
    discount: number().min(0).max(100).required(),
    images: array(
        mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    ).default([]).required(),
}).required();
