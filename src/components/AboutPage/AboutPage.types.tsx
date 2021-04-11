import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface AboutPagePropTypes {
    title: string;
    body: string;
    image: IGatsbyImageData;
    chooseUs: Readonly<{
        title: string
        text: string
        image: IGatsbyImageData
    }[]>
}
