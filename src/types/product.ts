import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface IProductPreview {
    id: string
    title: string
    brand: string
    price: number
    type: string
    category: string
    careatedAt: string
    hidden: boolean
    promo: boolean
    images: IGatsbyImageData[];
}

export interface IProduct extends IProductPreview {
    rawMarkdownBody: string
    imagesPreview: IGatsbyImageData[]
}
