import CMS from 'netlify-cms-app';


CMS.init({
    config: {
        load_config_file: false,
        site_url: 'https://cozy-clothing.netlify.app',

        backend: {
            name: 'git-gateway',
            branch: 'main',
        },
        local_backend: {
            allowed_hosts: ['192.168.0.123', '192.168.90.18', '192.168.90.19'],

        },
        publish_mode: 'editorial_workflow',
        media_folder: 'content/uploaded/',
        collections: [
            {
                label: 'Pages',
                name: 'pages',
                editor: {
                    preview: false,
                },
                files: [
                    {
                        label: 'About',
                        name: 'about',
                        file: 'content/about.md',
                        fields: [
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
                                media_folder: 'images/about',
                            },
                            {
                                label: 'Why Choose us',
                                name: 'choose_us',
                                widget: 'list',
                                summary: '{{title}}',
                                fields: [
                                    {
                                        label: 'Image',
                                        name: 'image',
                                        widget: 'image',
                                        media_folder: 'images/about',
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
                    },
                ],
            },
            {
                label: 'Data',
                name: 'data',
                editor: {
                    preview: false,
                },
                files: [
                    {
                        label: 'Catalog',
                        name: 'catalog',
                        file: 'content/catalog.json',
                        fields: [
                            {
                                label: 'Types',
                                name: 'types',
                                widget: 'list',
                                default: ['men', 'women', 'children'],
                            },
                            {
                                label: 'Categories',
                                name: 'categories',
                                widget: 'list',
                                fields: [
                                    {
                                        label: 'Name',
                                        name: 'name',
                                        widget: 'string',
                                    },
                                    {
                                        label: 'Type',
                                        name: 'type',
                                        widget: 'relation',
                                        collection: 'data',
                                        search_fields: ['types.*'],
                                        value_field: 'types.*',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'products',
                label: 'Products',
                folder: 'content/products',
                create: true,
                slug: '{{year}}{{month}}{{day}}{{hour}}{{minute}}{{second}}-{{name}}',
                media_folder: '{{slug}}/img/',
                path: '{{slug}}/index',
                editor: {
                    preview: false,
                },
                fields: [
                    {
                        label: 'Name',
                        name: 'name',
                        widget: 'string',

                    },
                    {
                        label: 'Publish Date',
                        name: 'date',
                        widget: 'datetime',
                    },
                    {
                        label: 'Description',
                        name: 'description',
                        widget: 'string',
                    },
                    {
                        label: 'Body',
                        name: 'body',
                        widget: 'markdown',
                    },
                    {
                        label: 'Price',
                        name: 'price',
                        widget: 'number',
                    },
                    {
                        label: 'Category',
                        name: 'category',
                        widget: 'relation',
                        collection: 'data',
                        search_fields: ['categories.*.name'],
                        display_fields: ['categories.*.type', 'categories.*.name'],
                        value_field: 'categories.*',
                    },
                ],
            },
        ],
    },
});

