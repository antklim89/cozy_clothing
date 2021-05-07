/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');


exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: {
            runtime: 'automatic',
        },
    });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    await createProductPages(graphql, createPage);
    await createCategoriesPage(graphql, createPage);
};


async function createCategoriesPage(graphql, createPage) {
    const { data } = await graphql(`
        {
            amr: allMarkdownRemark(
                filter: {frontmatter: {layout: {eq: "product"}, hidden: {eq: false}}}
            ) {
                nodes {
                    frontmatter {
                        category
                        type
                    }
                }
            }
        }
    `);

    const catalog = data.amr.nodes.reduce((acc, { frontmatter: { type, category } }) => {
        if (Array.isArray(acc[type])) {
            if (!acc[type].includes(category)) {
                acc[type].push(category);
            }
        } else {
            acc[type] = [category];
        }

        return acc;
    }, {});

    Object.keys(catalog).forEach((type) => {
        const categories = catalog[type];

        createPage({
            path: `/category/${type}`,
            component: path.resolve('src/templates/category.tsx'),
            context: { type, categories },
        });

        categories.forEach((category) => {
            createPage({
                path: `/category/${type}/${category}`,
                component: path.resolve('src/templates/category.tsx'),
                context: {
                    type,
                    categories,
                    category,
                },
            });
        });
    });
}

async function createProductPages(graphql, createPage) {
    const { data: { amr: { nodes: products } } } = await graphql(`
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

