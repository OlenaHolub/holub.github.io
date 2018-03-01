module.exports = {
    siteMetadata: {
        title: 'Holub homepage',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-helmet`
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
    pathPrefix: `/`,
};

