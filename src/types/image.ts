import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface IGatsbyImage {
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData
    }
}
