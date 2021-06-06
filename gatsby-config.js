/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const postcss = require('postcss-preset-env');


const query = `
{
    allMarkdownRemark(
        filter: {frontmatter: {
            layout: {eq: "product"},
            hidden: {eq: false},
        }}
    ) { nodes {
        id
        rawMarkdownBody
        frontmatter {
            title
            category
            careatedAt
            discount
            type
            price
            imagePreview {
                a:childImageSharp {
                    b:gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        width: 272
                        height: 390
                    )
                }
            }
        }
    } }
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
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                enableIdentityWidget: false,
                manualInit: true,
                modulePath: `${__dirname}/cms/build/cms/index.js`,
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
                normalizer: ({ data }) => data.allMarkdownRemark.nodes.map(({ id, rawMarkdownBody, frontmatter }) => ({
                    id,
                    rawMarkdownBody,
                    ...frontmatter,
                })),
            },
        },
        'gatsby-transformer-json',
        'gatsby-plugin-netlify',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-typescript-checker',
        'gatsby-plugin-typegen',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
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
            options: {
                postCssPlugins: [postcss(), autoprefixer],
            },
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
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/assets/logo512.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-alias-imports',
            options: {
                aliases: {
                    '~': 'src/',
                },
            },
        },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ],
};
