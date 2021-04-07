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
        media_folder: 'static/img',
        public_folder: '/img',
        collections: [
            {
                label: 'Data',
                name: 'data',
                files: [
                    {
                        label: 'Categories',
                        name: 'categories',
                        file: 'content/categories.json',
                        fields: [
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
                                        label: 'Description',
                                        name: 'description',
                                        widget: 'string',
                                        required: false,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Subcategories',
                        name: 'subcategories',
                        file: 'content/subcategories.json',
                        fields: [
                            {
                                label: 'Subcategories',
                                name: 'subcategories',
                                widget: 'list',
                                fields: [
                                    {
                                        label: 'Name',
                                        name: 'name',
                                        widget: 'string',
                                    },
                                    {
                                        label: 'Description',
                                        name: 'description',
                                        widget: 'string',
                                        required: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'product',
                label: 'Product',
                folder: 'content/product',
                create: true,
                slug: '{{type}}-{{category}}-{{name}}',
                media_folder: '',
                public_folder: '',
                path: '{{type}}/{{category}}/{{name}}',
                editor: {
                    preview: true,
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
                        value_field: 'categories.*.name',
                    },
                    {
                        label: 'Subcategory',
                        name: 'subcategory',
                        widget: 'relation',
                        collection: 'data',
                        search_fields: ['subcategories.*.name'],
                        value_field: 'subcategories.*.name',
                    },
                ],
            },
        ],
    },
});
