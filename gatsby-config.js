const postcss = require('postcss-preset-env');


module.exports = {
    siteMetadata: {
        title: 'Cozy Clothing',
        description: 'A small online clothing store created for training web development.',
        author: 'Anton',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                enableIdentityWidget: false,
                manualInit: false,
                modulePath: `${__dirname}/src/cms/cms.js`,
                publicPath: 'cms',
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
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'http://localhost:1337',
                queryLimit: 1000, // Default to 100
                contentTypes: ['article', 'user'],
                // If using single types place them in this array.
                singleTypes: ['home-page', 'contact'],
                // Possibility to login with a strapi user, when content types are not publically available (optional).
                loginData: {
                    identifier: '',
                    password: '',
                },
            },
        },
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
                postCssPlugins: [postcss()],
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
