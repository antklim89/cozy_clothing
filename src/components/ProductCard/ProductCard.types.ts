import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface Product {
    id: string
    title: string
    price: number
    type: string
    category: string
    careatedAt: string
    hidden: boolean
    promo: boolean
    images: IGatsbyImageData[];
}

export interface ProductCardProps {
    product: Product;
}

