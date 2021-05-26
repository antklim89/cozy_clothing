import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface IProductPreview {
    id: string
    title: string
    price: number
    type: string
    category: string
    careatedAt: string
    discount: number
    images: IGatsbyImageData[];
}

export interface IProduct extends IProductPreview {
    rawMarkdownBody: string
    imagesPreview: IGatsbyImageData[]
}
