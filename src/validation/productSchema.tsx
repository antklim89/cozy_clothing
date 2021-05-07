import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
    string, array, object, mixed,
} from 'yup';

import { productPreviewSchema } from './productPreviewSchema';


export const productSchema = object({
    // id: string().required(),
    // title: string().transform((v) => v.replace(/\s/ig, ' ')).required(),
    // brand: string().required(),
    // price: number().required(),
    // type: string().required(),
    // category: string().required(),
    // careatedAt: string().required(),
    // hidden: boolean().required(),
    // promo: boolean().required(),
    // images: array(
    //     mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    // ).default([]).required(),

    rawMarkdownBody: string().transform((v) => v.replace(/\s/ig, ' ')).required(),
    imagesPreview: array(
        mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    ).default([]).required(),
}).concat(productPreviewSchema).required();
