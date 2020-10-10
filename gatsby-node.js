const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(
    `
        {
            allContentfulBeans {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `
    ).then(result => {
    if (result.errors) {
        throw result.errors
    }

    // Create bean pages.
    const posts = result.data.allContentfulBeans.edges

    posts.forEach((post) => {

        createPage({
        path: `beans/${post.node.slug}`,
        component: path.resolve(`./src/templates/bean.js`),
        context: {
                slug: post.node.slug,
            },
        })
    })

    // Create bean list pages
    const postsPerPage = 20;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/beans` : `/beans/${i + 1}`,
            component: path.resolve('./src/templates/bean-list.js'),
            context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            });
        });
    })
}