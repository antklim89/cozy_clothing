import CMS from 'netlify-cms-app';

import { aboutPage } from './about-page';
import { hero } from './hero';
import { productsCollection, productCategories } from './products-collection';


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
            ...productsCollection,
            {
                label: 'Pages',
                name: 'pages',
                editor: {
                    preview: false,
                },
                files: [
                    aboutPage,
                    hero,
                ],
            },
            {
                label: 'Categories',
                name: 'categories',
                editor: {
                    preview: false,
                },
                files: [productCategories],
            },
        ],
    },
});

