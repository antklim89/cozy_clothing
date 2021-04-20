import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface IProduct {
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
