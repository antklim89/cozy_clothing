import { IGatsbyImageData } from 'gatsby-plugin-image';


interface IProductBase {
    id: string
    title: string
    price: number
    type: string
    category: string
    careatedAt: string
    discount: number
}

export interface IProductPreview extends IProductBase {
    imagePreview: IGatsbyImageData;
}

export interface IProduct extends IProductBase {
    rawMarkdownBody: string
    imagesPreview: IGatsbyImageData[]
    images: IGatsbyImageData[];
}
