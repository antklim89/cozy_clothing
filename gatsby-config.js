/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const postcss = require('postcss-preset-env');


const query = `#graphql
    {
        allProduct (
            filter: {
                layout: { eq: "product" },
                hidden: { eq: false },
            }
        ) { 
            nodes {
                id
                body
                title
                category
                careatedAt
                discount
                type
                price
                imagePreview {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: BLURRED
                            width: 272
                            height: 390
                        )
                    }
                }
            }
        }
    }
`;

module.exports = {
    siteMetadata: {
        title: 'Cozy Clothing',
        description: 'A small online clothing store created for training web development.',
        author: 'Anton',
    },
    plugins: [
        'gatsby-plugin-zopfli',
        'gatsby-plugin-netlify',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-typescript-checker',
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                enableIdentityWidget: false,
                manualInit: true,
                modulePath: `${__dirname}/src/cms/index.ts`,
                publicPath: 'cms',
            },
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'allProducts',
                engine: 'lunr',
                query,
                ref: 'id',
                index: ['title', 'body'],
                store: ['id', 'body', 'title', 'category', 'careatedAt', 'discount', 'type', 'price', 'imagePreview'],
                normalizer: ({ data }) => data.allProduct.nodes,
            },
        },
        {
            resolve: 'gatsby-transformer-json',
            options: {
                typeName: ({ node, object }) => {
                    const name = object.layout || node.name;
                    return name.replace(/^./, name[0].toLocaleUpperCase());
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: { rule: { include: /assets/ } },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: ['gatsby-remark-images'],
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                cssLoaderOptions: {
                    esModule: false,
                    modules: { namedExport: false },
                },
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: { postCssPlugins: [postcss(), autoprefixer] },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'assets',
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'cozy_clothing',
                short_name: 'cozy_clothing',
                start_url: '/',
                background_color: '#FDFDFD',
                theme_color: '#9E2B25',
                display: 'minimal-ui',
                icon: 'src/assets/logo512.png',
            },
        },
        {
            resolve: 'gatsby-alias-imports',
            options: { aliases: { '~': 'src/' } },
        },
    ],
};
