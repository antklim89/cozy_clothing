import { IGatsbyImage } from '~/types';


export interface BaseProduct {
    title: string
    price: number
    type: string
    category: string
    createdAt: string
    discount: number
}

export interface IProductPreview extends BaseProduct {
    id: string
    imagePreview: IGatsbyImage;
}

export interface IProduct extends BaseProduct {
    body: string
    id: string
    images: IGatsbyImage[];
    imagesPreview: IGatsbyImage[];
}
