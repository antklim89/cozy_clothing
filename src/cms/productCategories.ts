import type { CmsCollectionFile } from 'netlify-cms-core';

import productTypes from './productTypes';


export const productCategories: CmsCollectionFile = {
    label: 'Categories',
    name: 'categories',
    file: 'content/categories/categories.json',
    fields: productTypes.map((type) => ({
        label: `Category - ${type}`,
        name: type,
        widget: 'list',
    })),
};
