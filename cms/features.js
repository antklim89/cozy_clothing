
export const features = {
    label: 'Features',
    name: 'features',
    file: 'content/features/features.json',
    media_folder: 'images',
    folder: 'content/features',
    create: true,
    slug: '{{text}}',
    extension: 'json',
    editor: {
        preview: false,
    },
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
