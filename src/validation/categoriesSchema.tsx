import { array } from 'yup';

import { productPreviewSchema } from './productPreviewSchema';


export const categoriesShema = array(productPreviewSchema).required();
