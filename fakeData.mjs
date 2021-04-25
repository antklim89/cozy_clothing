import fs from 'fs';
import path from 'path';

import faker from 'faker';
import _ from 'lodash';


_.times(20, () => {
    const productType = _.sample(['men', 'women', 'boys', 'girls']);
    const title = faker.commerce.productName();
    const category = faker.commerce.product();

    const fileName = `${_.kebabCase(`${productType}-${category}-${title}`)}.md`;
    const markdown = `---
layout: product
type: ${productType}
hidden: false
promo: ${Math.random() > 0.5}
title: ${title}
careatedAt: ${faker.date.between(new Date(), new Date(Date.now() - 100 * 100)).toISOString()}
images:
    - image: images/pexels-karolina-grabowska-4210866.jpg
    - image: images/4206.jpg
    - image: images/4206.jpg
    - image: images/4206.jpg
    - image: images/4206.jpg
    - image: images/4206.jpg
price: ${faker.commerce.price()}
category: ${category}
brand: ${faker.company.companyName()}
---
${faker.commerce.productDescription()}
${faker.commerce.productDescription()}
${faker.lorem.paragraphs(2)}
    `;

    console.debug('||markdown: \n', markdown);
    console.debug('||fileName: \n', fileName);
    console.debug('||productType: \n', productType);

    fs.writeFileSync(path.resolve('./content/products', productType, fileName), markdown);
});

