const fs = require('fs');
const path = require('path');

// const { createFilePath } = require('gatsby-source-filesystem');


exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: {
            runtime: 'automatic',
        },
    });
};


// exports.onCreateNode = ({ node, getNode, actions }) => {
//     if (node.internal.type === 'Directory') {
//         // console.debug('||node: \n', node);

//         const value = createFilePath({ node, getNode });
//         console.debug('||path: \n', node.name, value);
//         actions.createNodeField({
//             node,
//             name: 'path',
//             value,
//         });
//     }
// };

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const component = path.resolve('src/pages/index.tsx');
    // const { data } = await graphql(`
    //     query MyQuery {
    //         directory(name: {eq: "product"}) {
    //             name
    //             absolutePath
    //         }
    //     }
    // `);

    // console.debug('||data: \n', JSON.stringify(data, null, 4));
    // const types = fs.readdirSync(data.directory.absolutePath);
    // console.log(types);
    createPage({
        path: 'men',
        component,
        context: { foo: 'bar' },
    });
};
