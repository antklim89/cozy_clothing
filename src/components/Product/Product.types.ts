import { IGatsbyImageData } from 'gatsby-plugin-image';

import { IProduct } from '~/types';


export interface ProductPropTypes {
    product: IProduct & {
        rawMarkdownBody: string
        imagesPreview: IGatsbyImageData[]
    }
}

