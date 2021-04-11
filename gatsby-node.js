const path = require('path');


exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: {
            runtime: 'automatic',
        },
    });
};

// exports.onCreateWebpackConfig = ({ _, actions, getConfig }) => {
//     const config = getConfig();
//     const miniCssExtractPlugin = config.plugins.find(
//         (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
//     );
//     if (miniCssExtractPlugin) miniCssExtractPlugin.options.ignoreOrder = true;
//     actions.replaceWebpackConfig(config);
// };


exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const { data } = await graphql(`
        {
            file(name: {eq: "catalog"}) {
                childContentJson {
                    types
                    categories {
                        name
                        type
                    }
                }
            }
        }
    `);


    data.file.childContentJson.types.forEach((type) => {
        const categories = data.file.childContentJson.categories.filter((i) => i.type === type);

        createPage({
            path: `/type/${type.toLowerCase()}`,
            component: path.resolve('src/templates/product-type.tsx'),
            context: { type, categories },
        });
    });
};
