import productTypes from './productTypes';


export const productCategories = {
    label: 'Categories',
    name: 'categories',
    file: 'content/categories/categories.json',
    fields: productTypes.map((type) => ({
        label: `Category - ${type}`,
        name: type,
        widget: 'list',
    })),
};
