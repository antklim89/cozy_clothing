
export const features = {
    label: 'Features',
    name: 'features',
    file: 'content/features/features.json',
    media_folder: 'images/',
    fields: [
        {
            label: 'Features',
            name: 'features',
            widget: 'list',
            summary: '{{text}}',
            fields: [
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
        },
    ],
};
