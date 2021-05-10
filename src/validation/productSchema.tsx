import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
    string, array, object, mixed,
} from 'yup';

import { productPreviewSchema } from './productPreviewSchema';


export const productSchema = object({
    rawMarkdownBody: string().transform((v) => v.replace(/\s/ig, ' ')).required(),
    imagesPreview: array(
        mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    ).default([]).required(),
}).concat(productPreviewSchema).required();
