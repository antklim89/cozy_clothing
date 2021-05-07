import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
    string, number, array, object, mixed, boolean,
} from 'yup';

import { productPreviewSchema } from './productPreviewSchema';


export const categoriesShema = array(productPreviewSchema).required();
