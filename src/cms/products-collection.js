import { productTypes } from '../constants';


export const productsCollection = productTypes.map((type) => ({
    name: type,
    label: `Products ${type}`,
    folder: `content/products/${type}`,
    create: true,
    slug: `${type}-{{category}}-{{brand}}-{{title}}`,
    media_folder: 'images',
    editor: {
        preview: false,
    },
    fields: [
        {
            label: 'Layout',
            name: 'layout',
            widget: 'hidden',
            default: 'product',
        },
        {
            label: 'Type',
            name: 'type',
            widget: 'hidden',
            default: type,
        },
        {
            label: 'Hidden',
            name: 'hidden',
            widget: 'boolean',
            default: false,
        },
        {
            label: 'Promo',
            name: 'promo',
            widget: 'boolean',
            default: false,
        },
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
        },
        {
            label: 'Brand',
            name: 'brand',
            widget: 'string',
        },
        {
            label: 'Created Date',
            name: 'careatedAt',
            widget: 'datetime',
        },
        {
            label: 'Body',
            name: 'body',
            widget: 'markdown',
        },
        {
            label: 'Images',
            name: 'images',
            widget: 'list',
            default: [],
            fields: [
                {
                    label: 'Image',
                    name: 'image',
                    widget: 'image',
                    required: true,
                },
            ],
        },
        {
            label: 'Price',
            name: 'price',
            widget: 'number',
            value_type: 'float',
            min: 0,
        },
        {
            label: 'Category',
            name: 'category',
            widget: 'relation',
            collection: 'categories',
            search_fields: [`${type}.*.category`],
            value_field: `${type}.*.category`,
        },
    ],
}));

export const productCategories = {
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
};