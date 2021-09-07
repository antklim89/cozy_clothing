import type { CmsCollectionFile } from 'netlify-cms-core';


export const info: CmsCollectionFile = {
    label: 'Info',
    name: 'info',
    file: 'content/info/info.json',
    media_folder: 'images/',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            default: 'Cozy Clothing',
            pattern: ['^.{3,500}$', 'The text must be between 3 and 500 letters long.'],
        },
        {
            label: 'Description',
            name: 'description',
            widget: 'text',
            default: 'A small online clothing store created for training web development.',
            pattern: ['^.{3,10000}$', 'The text must be between 3 and 10000 letters long.'],
        },
        {
            label: 'Author',
            name: 'author',
            widget: 'text',
            default: 'Anton',
            pattern: ['^.{3,500}$', 'The text must be between 5 and 500 letters long.'],
        },
    ],
};
