import React from 'react'
import { graphql } from 'gatsby'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

import Hero from '@components/Home/Hero'
import Sustainability from "@components/Home/Sustainability"
import Favorite from '@components/Home/Favorite'
import About from '@components/Home/About'
import Work from '@components/Home/Work'
import Gallery from '@components/Home/Gallery'

const IndexPage = ({ location, data }) => {

    const hero = data.contentfulMainVisual
    const posts = data.allContentfulBeans.edges
    const insta = data.allInstaNode.edges

    return (
        <Layout location={location}>
            <SEO
                title="美味しいコーヒーと共に、人生に豊かな時間を"
            />
            <Hero hero={hero} />
            <Sustainability />
            <Favorite posts={posts} />
            <About />
            <Work hero={hero} />
            <Gallery insta={insta} />
        </Layout>
    )

}

export default IndexPage

export const pageQuery = graphql`
    query {
        allContentfulBeans (
            sort: { fields: createdAt, order: ASC }
            filter: { favorite: {eq: true} }
            limit: 4
        ) {
            edges {
                    node {
                        title
                        slug
                        featuredImage {
                            fluid(maxWidth: 515) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
            allInstaNode (limit: 8, sort: {order: DESC, fields: localFile___atime}) {
                edges {
                    node {
                        id
                        localFile {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        contentfulMainVisual {
            home {
                fluid(maxWidth: 2000) {
                    ...GatsbyContentfulFluid
                }
            }
            beans {
                fluid(maxWidth: 620) {
                    ...GatsbyContentfulFluid
                }
            }
            menu {
                fluid(maxWidth: 620) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`