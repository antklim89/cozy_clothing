import fs from 'fs';
import path from 'path';

import faker from 'faker';
import _ from 'lodash';


const types = ['men', 'women', 'boys', 'girls'];
const categories = _.times(10, () => faker.commerce.product());


types.forEach((type) => {
    _.sampleSize(categories, 5).forEach((category) => {
        _.times(10, () => {
            const title = faker.commerce.productName();

            const fileName = `${_.kebabCase(`${category}-${title}`)}.md`;
            const markdown = `---
layout: product
type: ${type}
hidden: false
discount: ${_.random(0, 1, true) > 0.5 ? _.random(5, 40, false) : 0}
title: ${title}
careatedAt: ${faker.date.between(new Date(), new Date(Date.now() - 100 * 100)).toISOString()}
images:
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
    - image: "../../images/fake-image-${_.random(1, 6, false)}.jpg"
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
            } catch {}

            fs.writeFileSync(path.resolve('./content/products', type, fileName), markdown);
        });
    });
});

