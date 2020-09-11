require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: `Praise Coffee`,
        description: `こんにちは。Praise Coffeeです。`,
        author: `はる`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.jpg`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [],
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "@components": "src/components",
                    "@pages": "src/pages",
                    "@templates": "src/templates",
                    "@images": "src/images",
                    "@styles": "src/styles",
                    },
                extensions: [
                    "js",
                ],
            },
        },
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_API_TOKEN,
            },
        },
        `gatsby-remark-responsive-iframe`,
    ],
}
