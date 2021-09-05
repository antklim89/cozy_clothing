import fs from 'fs';
import path from 'path';

import faker from 'faker';
import _ from 'lodash';


const TOTAL_CATEGORIES = 7;
const PRODUCT_PER_CATEGORY = 6;
const CATEGORIES_PER_TYPE = 4;

const YEAR_MS = 31557600000;

const types = ['men', 'women', 'boys', 'girls'];
const categories = _.times(TOTAL_CATEGORIES, () => faker.commerce.product());


types.forEach((type) => {
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
                imagePreview: `../../images/fake-image-${_.random(1, 6, false)}.jpg`,
                images: [
                    '../../images/fake-image-1.jpg',
                    '../../images/fake-image-2.jpg',
                    '../../images/fake-image-3.jpg',
                    '../../images/fake-image-4.jpg',
                    '../../images/fake-image-5.jpg',
                    '../../images/fake-image-6.jpg',
                ],
                price: Number(faker.commerce.price(10, 1000, 2)),
                category,
                body: `${faker.commerce.productDescription()}
                ${faker.commerce.productDescription()}
                ${faker.lorem.paragraphs(2)}`,
            }, null, 4);

            const productTypePath = path.resolve('content/products', type);

            if (!fs.existsSync(productTypePath)) {
                fs.mkdirSync(productTypePath, { recursive: true });
            }
            fs.writeFileSync(path.resolve(productTypePath, fileName), product);
        });
    });
});


