import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as yup from 'yup';


export const aboutSchema = yup.object({
    body: yup.string().required(),
    chooseUs: yup.array(yup.object({
        text: yup.string().required(),
        title: yup.string().required(),
        image: yup.mixed<IGatsbyImageData>().transform((v) => v.childImageSharp.gatsbyImageData)
            .required(),
    })).required(),
    image: yup.mixed<IGatsbyImageData>().transform((v) => v.childImageSharp.gatsbyImageData)
        .required(),
    title: yup.string().required(),
}).required();
