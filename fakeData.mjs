import fs from 'fs';
import path from 'path';

import faker from 'faker';
import _ from 'lodash';


const TOTAL_CATEGORIES = 20;
const PRODUCT_PER_CATEGORY = 10;
const CATEGORIES_PER_TYPE = 4;

const types = ['men', 'women', 'boys', 'girls'];
const categories = _.times(TOTAL_CATEGORIES, () => faker.commerce.product());


types.forEach((type) => {
    _.sampleSize(categories, CATEGORIES_PER_TYPE).forEach((category) => {
        _.times(PRODUCT_PER_CATEGORY, () => {
            const title = faker.commerce.productName();

            const fileName = `${_.kebabCase(`${category}-${title}`)}.md`;
            const markdown = `---
layout: product
type: ${type}
hidden: false
discount: ${_.random(0, 1, true) > 0.5 ? _.random(5, 40, false) : 0}
title: ${title}
careatedAt: ${faker.date.between(new Date(), new Date(Date.now() - 100 * 100)).toISOString()}
imagePreview: "../../images/fake-image-1.jpg"
images:
    - image: "../../images/fake-image-1.jpg"
    - image: "../../images/fake-image-2.jpg"
    - image: "../../images/fake-image-3.jpg"
    - image: "../../images/fake-image-4.jpg"
    - image: "../../images/fake-image-5.jpg"
    - image: "../../images/fake-image-6.jpg"
price: ${faker.commerce.price()}
category: ${category}
---
${faker.commerce.productDescription()}
${faker.commerce.productDescription()}
${faker.lorem.paragraphs(2)}
`;

            // console.debug('||fileName: \n', fileName);
            // console.debug('||productType: \n', type);
            try {
                fs.mkdirSync(path.resolve('./content/products', type));
                // eslint-disable-next-line no-empty
            } catch { }

            fs.writeFileSync(path.resolve('./content/products', type, fileName), markdown);
        });
    });
});

