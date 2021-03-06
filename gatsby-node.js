/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { paginate } = require('gatsby-awesome-pagination');


exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: { runtime: 'automatic' },
    });
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');
    if (miniCssExtractPlugin) miniCssExtractPlugin.options.ignoreOrder = true;

    actions.replaceWebpackConfig(config);
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    await createProductPages(graphql, createPage);
    await createProductsPage(graphql, createPage);
};


async function createProductsPage(graphql, createPage) {
    const { data: { catalog } } = await graphql(`#graphql
        {
            catalog {
                boys
                girls
                men
                women
            }
        }
    `);

    await Promise.all(Object.keys(catalog).map((type) => createPageForAllCategories(type)));

    async function createPageForAllCategories(type) {
        const categories = catalog[type];

        const { data: { allProduct: { nodes: productsByTypes } } } = await graphql(`#graphql
            {
                allProduct (
                    filter: {
                        layout: {eq: "product"},
                        hidden: {eq: false},
                        type: {eq: "${type}"}
                    }
                ) {
                    nodes { id }
                }
            }
        `);

        paginate({
            createPage,
            items: productsByTypes,
            itemsPerPage: 12,
            pathPrefix: `/products/${type}`,
            component: path.resolve('src/templates/products.tsx'),
            context: {
                type,
                categories,
            },
        });
        await Promise.all(categories.map((category) => createPageForOneCategory(category, type, categories)));
    }

    async function createPageForOneCategory(category, type, categories) {
        const { data: { allProduct: { nodes: productsByCategories } } } = await graphql(`#graphql
            {
                allProduct (
                    filter: {
                        layout: {eq: "product"},
                        hidden: {eq: false},
                        type: {eq: "${type}"}
                        category: {eq: "${category}"}
                    }
                ) {
                    nodes { id }
                }
            }
        `);

        paginate({
            createPage,
            items: productsByCategories,
            itemsPerPage: 12,
            pathPrefix: `/products/${type}/${category}`,
            component: path.resolve('src/templates/products.tsx'),
            context: {
                type,
                categories,
                category,
            },
        });
    }
}


async function createProductPages(graphql, createPage) {
    const { data: { allProduct: { nodes: products } } } = await graphql(`#graphql
        {
            allProduct(
                filter: {
                    layout: {eq: "product"},
                    hidden: {eq: false},
                }
            ) {
                nodes {id}
            }
        }
    `);

    products.forEach((product) => {
        createPage({
            path: `/product/${product.id}`,
            component: path.resolve('src/templates/product.tsx'),
            context: { id: product.id },
        });
    });
}

