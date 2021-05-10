import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as yup from 'yup';


export default yup.array(yup.object({
    text: yup.string().required(),
    image: yup.mixed<IGatsbyImageData>().transform((v) => v.a.b).required(),
}).required()).required();
