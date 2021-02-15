module.exports = {
    siteMetadata: {
        title: 'maxdev',
        description: 'dev blog',
        author: 'maxdev',
        // TODO add site URL here
        site: '',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-embed-markdown',
                        options: {
                            directory: `${__dirname}/src/snippets`,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            inlineCodeMarker: '÷',
                        },
                    },
                    // 'gatsby-remark-copy-linked-files',
                    'gatsby-remark-autolink-headers',
                    'gatsby-plugin-twitter',
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                        },
                    },
                ],
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
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                options: {
                    emitWarning: true,
                    failOnError: false,
                    failOnWarning: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
    ],
};
