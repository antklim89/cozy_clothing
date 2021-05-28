import { CmsCollection } from 'netlify-cms-core';

import { productTypes } from '../src/constants';


export const productsCollection: CmsCollection[] = productTypes.map((type) => ({
    name: type,
    label: `Products ${type}`,
    folder: `content/products/${type}`,
    create: true,
    slug: '{{category}}-{{title}}',
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
            label: 'Discount',
            name: 'discount',
            widget: 'number',
            min: 0,
            max: 100,
            default: 0,
        },
        {
            label: 'Title',
            name: 'title',
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
            label: 'Image Preview',
            name: 'imagePreview',
            widget: 'image',
            required: true,
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

