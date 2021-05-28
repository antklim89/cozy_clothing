import { IGatsbyImageData } from 'gatsby-plugin-image';
import { object, mixed } from 'yup';

import { productBaseSchema } from './productBaseSchema';


export const productPreviewSchema = object({
    imagePreview: mixed<IGatsbyImageData>().transform((v, o) => o.a.b).required(),
}).concat(productBaseSchema).required();
