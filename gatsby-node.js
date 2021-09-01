/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { paginate } = require('gatsby-awesome-pagination');

const { productSchema } = require('./src/validation');


exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: {
            runtime: 'automatic',
        },
    });
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
        (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
    );
    if (miniCssExtractPlugin) miniCssExtractPlugin.options.ignoreOrder = true;

    actions.replaceWebpackConfig(config);
};


exports.sourceNodes = async (args) => {
    await createCatalogNodes(args);
    await validateProducts(args);
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    // await createProductPages(graphql, createPage);
    // await createCategoriesPage(graphql, createPage);
};

function validateProducts({ getNodesByType }) {
    getNodesByType('MarkdownRemark')
        .filter(({ frontmatter: { layout, hidden } = {} } = {}) => layout === 'product' && hidden === false)
        .map((product) => productSchema.validateSync(product));
}

function createCatalogNodes({
    actions, getNodesByType, createNodeId, createContentDigest,
}) {
    const catalog = getNodesByType('MarkdownRemark')
        .filter(({ frontmatter: { layout, hidden } = {} } = {}) => layout === 'product' && hidden === false)
        .reduce((acc, { frontmatter: { type, category } }) => {
            if (Array.isArray(acc[type])) {
                if (!acc[type].includes(category)) {
                    acc[type].push(category);
                }
            } else {
                acc[type] = [category];
            }

            return acc;
        }, {});

    actions.createNode({
        ...catalog,
        id: createNodeId('catalog'),
        parent: null,
        internal: {
            type: 'Catalog',
            contentDigest: createContentDigest(catalog),
        },
    });
}

async function createCategoriesPage(graphql, createPage) {
    const { data: { productCatalog: { catalog } } } = await graphql(`#graphql
        {
            productCatalog {
                catalog {
                    boys
                    girls
                    men
                    women
                }
            }
        }
    `);

    await Promise.all(Object.keys(catalog).map(async (type) => {
        const categories = catalog[type];

        const { data: { allMarkdownRemark: { nodes: productsByTypes } } } = await graphql(`#graphql
            {
                allMarkdownRemark(
                    filter: {frontmatter: {
                        layout: {eq: "product"},
                        hidden: {eq: false},
                        type: {eq: "${type}"}
                    }}
                ) { nodes { id } }
            }
        `);

        paginate({
            createPage,
            items: productsByTypes,
            itemsPerPage: 12,
            pathPrefix: `/category/${type}`,
            component: path.resolve('src/templates/category.tsx'),
            context: { type, categories },
        });

        await Promise.all(categories.map(async (category) => {
            const { data: { allMarkdownRemark: { nodes: productsByCategories } } } = await graphql(`#graphql
                {
                    allMarkdownRemark(
                        filter: {frontmatter: {
                            layout: {eq: "product"},
                            hidden: {eq: false},
                            type: {eq: "${type}"}
                            category: {eq: "${category}"}
                        }}
                    ) { nodes { id } }
                }
            `);

            paginate({
                createPage,
                items: productsByCategories,
                itemsPerPage: 12,
                pathPrefix: `/category/${type}/${category}`,
                component: path.resolve('src/templates/category.tsx'),
                context: {
                    type,
                    categories,
                    category,
                },
            });
        }));
    }));
}

async function createProductPages(graphql, createPage) {
    const { data: { amr: { nodes: products } } } = await graphql(`#graphql
        {
            amr: allMarkdownRemark(
                filter: {frontmatter: {
                    layout: {eq: "product"},
                    hidden: {eq: false}},
                }
            ) { nodes {id} }
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

