import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import { aboutPage } from './about-page';
import { features } from './features';
import { hero } from './hero';
import { productCategoriesCollection } from './product-categories-collection';
import { productsCollection } from './products-collection';
CMS.registerMediaLibrary(uploadcare);
CMS.init({
    config: {
        load_config_file: false,
        media_library: {
            name: 'uploadcare',
            config: {
                publicKey: process.env.uploadcarePublicKey,
            },
        },
        site_url: 'https://cozy-clothing.netlify.app',
        backend: {
            name: 'git-gateway',
            branch: 'main',
        },
        local_backend: {
            allowed_hosts: ['192.168.0.123', '192.168.90.18', '192.168.90.19', '127.0.0.1'],
        },
        publish_mode: 'editorial_workflow',
        media_folder: 'content/uploaded/',
        collections: [
            ...productsCollection,
            productCategoriesCollection,
            {
                label: 'Pages',
                name: 'pages',
                editor: { preview: false },
                files: [
                    aboutPage,
                    hero,
                    features,
                ],
            },
        ],
    },
});
