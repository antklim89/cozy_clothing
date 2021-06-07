import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
    string, array, object, mixed,
} from 'yup';

import { productBaseSchema } from './productBaseSchema';


export const productSchema = object({
    rawMarkdownBody: string().transform((v) => v.replace(/\s/ig, ' ')).required(),
    imagesPreview: array(
        mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    ).min(1).default([]).required(),
    images: array(
        mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    ).min(1).default([]).required(),
}).concat(productBaseSchema).required();
