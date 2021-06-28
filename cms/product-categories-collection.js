import productTypes from './productTypes';


export const productCategoriesCollection = {
    label: 'Categories',
    name: 'categories',
    editor: {
        preview: false,
    },
    files: [{
        label: 'Categories',
        name: 'categories',
        file: 'content/categories.json',
        fields: productTypes.map((type) => ({
            label: `Category - ${type}`,
            name: type,
            widget: 'list',
            minimize_collapsed: true,
            summary: '{{category}}',
            fields: [
                {
                    label: 'Category',
                    name: 'category',
                    widget: 'string',
                },
            ],
        })),
    }],
};