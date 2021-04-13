

export interface CategoryPagePropTypes {
    type: string
    categories: Array<{
        name: string
        type: string
    }>
    products: Array<{
        id: string
        title: string;
        price: number;
        type: string;
    }>
}
