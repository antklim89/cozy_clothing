import { IGatsbyImageData } from 'gatsby-plugin-image';

import { productPreviewSchema, productSchema } from '~/validation';


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

// export type IProductPreview = ReturnType<typeof productSchema.validateSync>
// export type IProduct = ReturnType<typeof productPreviewSchema.validateSync>

export interface IProduct extends IProductPreview {
    rawMarkdownBody: string
    imagesPreview: IGatsbyImageData[]
}
