import type { CmsCollectionFile } from 'netlify-cms-core';
import productTypes from './productTypes';


export const catalog: CmsCollectionFile = {
    label: 'Catalog',
    name: 'catalog',
    file: 'content/catalog/catalog.json',
    fields: productTypes.map((type) => ({
        label: `Category - ${type}`,
        name: type,
        widget: 'list',
    })),
};
