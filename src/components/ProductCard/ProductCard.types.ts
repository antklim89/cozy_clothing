import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface Product {
    id: string;
    title: string;
    price: number;
    type: string;
    category: string;
    image: IGatsbyImageData;
}

export interface ProductCardProps {
    product: Product;
}

