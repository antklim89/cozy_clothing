import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as yup from 'yup';


export const heroSchema = {
    title: yup.string().min(5).max(50).required(),
    body: yup.string().min(5).max(1000).required(),
    image: yup.mixed<IGatsbyImageData>().transform((v, o) => o.a.b).required(),
};
