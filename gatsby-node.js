const path = require('path');


exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: {
            runtime: 'automatic',
        },
    });
};

exports.onCreateWebpackConfig = ({ _, actions, getConfig }) => {
    const config = getConfig();
    config.cache = {
        type: 'filesystem',
    };
    // const miniCssExtractPlugin = config.plugins.find(
    //     (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
    // );
    // if (miniCssExtractPlugin) miniCssExtractPlugin.options.ignoreOrder = true;
    actions.replaceWebpackConfig(config);
};


exports.createPages = async ({ graphql, actions: { createPage } }) => {
    await createProductPages(graphql, createPage);
    await createCategoriesPage(graphql, createPage);
};


async function createCategoriesPage(graphql, createPage) {
    const { data: { file: { catalog } } } = await graphql(`
        {
            file(name: {eq: "categories"}) {
                catalog: childContentJson {
                    boys {category}
                    girls {category}
                    men {category}
                    women {category}
                }
            }
        }
    `);

    Object.keys(catalog).forEach((type) => {
        const categories = catalog[type];

        createPage({
            path: `/category/${type}`,
            component: path.resolve('src/templates/category.tsx'),
            context: { type, categories },
        });

        categories.forEach(({ category }) => {
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

