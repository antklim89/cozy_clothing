import fs from 'fs';
import path from 'path';

import { faker } from '@faker-js/faker';
import _ from 'lodash';


const PRODUCT_PER_CATEGORY = 6;
const CATEGORIES_PER_TYPE = 4;
const FEATURES = 4;

const YEAR_MS = 31557600000;


const types = ['men', 'women', 'boys', 'girls'];
const catalog = types.reduce((acc, type) => ({
    ...acc,
    [type]: ['trousers', 'shirts', 'boots', 'sweatshirt', 'jeans', 'underwear'],
}), {});
const features = _.times(FEATURES, () => faker.company.catchPhrase());

/**
 * Catalog
 */
const catalogPath = path.resolve('content/catalog');
if (!fs.existsSync(catalogPath)) {
    fs.mkdirSync(catalogPath, { recursive: true });

    const fileName = 'catalog.json';

    const catalogJson = JSON.stringify(catalog, null, 4);

    fs.writeFileSync(path.resolve(catalogPath, fileName), catalogJson);
}

/**
 * Features
 */
const featurePath = path.resolve('content/features');
if (!fs.existsSync(featurePath)) {
    fs.mkdirSync(featurePath, { recursive: true });

    features.forEach((featureText) => {
        const fileName = `${_.kebabCase(`${featureText}`)}.json`;

        const feature = JSON.stringify({
            layout: 'features',
            text: featureText,
            image: `images/fake-image-${_.random(1, 6, false)}.jpg`,
        }, null, 4);

        fs.writeFileSync(path.resolve(featurePath, fileName), feature);
    });
}

/**
 * Products
 */
const productPath = path.resolve('content/products');

if (!fs.existsSync(productPath)) {
    fs.mkdirSync(productPath, { recursive: true });

    types.forEach((type) => {
        const productTypePath = path.resolve('content/products', type);
        if (!fs.existsSync(productTypePath)) {
            fs.mkdirSync(productTypePath, { recursive: true });
        }

        const categories = catalog[type];

        _.sampleSize(categories, CATEGORIES_PER_TYPE).forEach((category) => {
            _.times(PRODUCT_PER_CATEGORY, () => {
                const title = faker.commerce.productName();

                const fileName = `${_.kebabCase(`${category}-${title}`)}.json`;


                const product = JSON.stringify({
                    layout: 'product',
                    type,
                    hidden: false,
                    discount: _.random(0, 1, true) > 0.5 ? _.random(5, 40, false) : 0,
                    title,
                    careatedAt: faker.date.between(new Date(), new Date(Date.now() - YEAR_MS)).toISOString(),
                    imagePreview: `images/fake-image-${_.random(1, 6, false)}.jpg`,
                    images: [
                        'images/fake-image-1.jpg',
                        'images/fake-image-2.jpg',
                        'images/fake-image-3.jpg',
                        'images/fake-image-4.jpg',
                        'images/fake-image-5.jpg',
                        'images/fake-image-6.jpg',
                    ],
                    price: Number(faker.commerce.price(10, 1000, 2)),
                    category,
                    body: `${faker.commerce.productDescription()}
                ${faker.commerce.productDescription()}
                ${faker.lorem.paragraphs(2)}`,
                }, null, 4);


                fs.writeFileSync(path.resolve(productTypePath, fileName), product);

            });
        });
    });
}
