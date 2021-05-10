import { array } from 'yup';

import { productPreviewSchema } from './productPreviewSchema';


export const productPreviewArraySchema = array(productPreviewSchema).required();
