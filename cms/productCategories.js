import productTypes from './productTypes';


export const productCategories = {
    label: 'Categories',
    name: 'categories',
    editor: {
        preview: false,
    },
    files: [{
        label: 'Categories',
        name: 'categories',
        file: 'content/categories/index.json',
        fields: productTypes.map((type) => ({
            label: `Category - ${type}`,
            name: type,
            widget: 'list',
        })),
    }],
};
