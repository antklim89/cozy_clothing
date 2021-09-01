import { IGatsbyImage } from '~/types';


export interface BaseProductFrontmatterSchema {
    title: string
    price: number
    type: string
    category: string
    careatedAt: string
    discount: number
}

export interface IProductPreview {
    id: string
    frontmatter: {
        imagePreview: IGatsbyImage;
    } & BaseProductFrontmatterSchema
}

export interface IProduct {
    rawMarkdownBody: string
    id: string
    frontmatter: {
        images: IGatsbyImage[];
        imagesPreview: IGatsbyImage[];
    } & BaseProductFrontmatterSchema
}
