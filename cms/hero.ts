import { CmsCollectionFile } from 'netlify-cms-core';


export const hero: CmsCollectionFile = {
    label: 'Hero',
    name: 'hero',
    file: 'content/hero/hero.json',
    media_folder: 'hero/',
    fields: [
        {
            label: 'Layout',
            name: 'layout',
            widget: 'hidden',
            default: 'hero',
        },
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            default: 'About Shop',
            pattern: ['^.{5,50}$', 'The text must be between 5 and 50 letters long.'],
        },
        {
            label: 'Body',
            name: 'body',
            widget: 'text',
            pattern: ['^.{5,1000}$', 'The text must be between 5 and 1000 letters long.'],
        },
        {
            label: 'Image',
            name: 'image',
            widget: 'image',
        },
    ],
};
