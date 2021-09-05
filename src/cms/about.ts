import type { CmsCollectionFile } from 'netlify-cms-core';


export const about: CmsCollectionFile = {
    label: 'About',
    name: 'about',
    file: 'content/about/about.json',
    media_folder: 'images/',
    fields: [
        {
            label: 'Layout',
            name: 'layout',
            widget: 'hidden',
            default: 'about',
        },
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            default: 'About Shop',
        },
        {
            label: 'Body',
            name: 'body',
            widget: 'markdown',
        },
        {
            label: 'Image',
            name: 'image',
            widget: 'image',
        },
        {
            label: 'Why Choose us',
            name: 'chooseUs',
            widget: 'list',
            summary: '{{title}}',
            fields: [
                {
                    label: 'Image',
                    name: 'image',
                    widget: 'image',
                },
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: 'Text',
                    name: 'text',
                    widget: 'text',
                },
            ],
        },
    ],
};
