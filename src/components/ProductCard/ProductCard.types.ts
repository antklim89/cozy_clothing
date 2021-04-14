import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface Product {
    id: string;
    title: string;
    price: number;
    type: string;
    image: IGatsbyImageData;
}

export interface ProductCardProps {
    product: Product;
}

