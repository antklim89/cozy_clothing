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
        query {
            file(name: {eq: "catalog"}) {
                remark: childMarkdownRemark {
                    frontmatter {
                            groups {
                                name
                        }
                    }
                }
            }
        }
    `);

    data.file.remark.frontmatter.groups.forEach((group) => {
        createPage({
            path: group.name.toLowerCase(),
            component: path.resolve('src/templates/product.tsx'),
            context: group,
        });
    });
};
