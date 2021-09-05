import type { CmsCollection } from 'netlify-cms-core';


export const features: CmsCollection = {
    label: 'Features',
    name: 'features',
    folder: 'content/features',
    extension: 'json',
    media_folder: 'images',
    create: true,
    slug: '{{text}}',
    editor: { preview: false },
    fields: [
        {
            label: 'Layout',
            name: 'layout',
            widget: 'hidden',
            default: 'features',
        },
        {
            label: 'Image',
            name: 'image',
            widget: 'image',
        },
        {
            label: 'Text',
            name: 'text',
            widget: 'string',
            pattern: ['^.{5,50}$', 'The text must be between 5 and 50 letters long.'],
        },
    ],
};
