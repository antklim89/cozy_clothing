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
            file(name: {eq: "categories"}) {
                remark: childMarkdownRemark {
                    frontmatter {
                        categories {
                            name
                        }
                    }
                }
            }
        }
    `);

    data.file.remark.frontmatter.categories.forEach((category) => {
        createPage({
            path: `/category/${category.name.toLowerCase()}`,
            component: path.resolve('src/templates/categories.tsx'),
            context: category,
        });
    });
};
