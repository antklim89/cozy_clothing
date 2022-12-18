import type { CmsCollection } from 'netlify-cms-core';

import productTypes from './productTypes';


export const products: CmsCollection[] = productTypes.map((type) => ({
    name: type,
    label: `Products ${type}`,
    folder: `content/products/${type}`,
    create: true,
    slug: '{{type}}-{{category}}-{{title}}',
    media_folder: 'images',
    extension: 'json',
    editor: { preview: false },
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
            label: 'Discount',
            name: 'discount',
            widget: 'number',
            min: 0,
            max: 100,
        },
        {
            label: 'Price',
            name: 'price',
            widget: 'number',
            value_type: 'float',
            min: 0,
        },
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
        },
        {
            label: 'Created Date',
            name: 'createdAt',
            widget: 'datetime',
        },
        {
            label: 'Body',
            name: 'body',
            widget: 'markdown',
            pattern: ['^[\\w\\d\\s]{5,50}$', 'Invalid field'],
        },
        {
            label: 'Images',
            name: 'images',
            widget: 'list',
            default: [],
            required: true,
            min: 1,
            field: {
                label: 'Image',
                name: 'image',
                widget: 'image',
                required: true,
            },
        },
        {
            label: 'Image Preview',
            name: 'imagePreview',
            widget: 'image',
            required: true,
        },
        {
            label: 'Category',
            name: 'category',
            widget: 'relation',
            collection: 'categories',
            search_fields: [`${type}.*`],
            value_field: `${type}.*`,
        },
    ],
}));

