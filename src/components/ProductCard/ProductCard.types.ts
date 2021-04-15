import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface Product {
    id: string;
    title: string;
    price: number;
    type: string;
    category: string;
    images: IGatsbyImageData[];
}

export interface ProductCardProps {
    product: Product;
}

