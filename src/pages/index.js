import React from 'react'
import { graphql } from 'gatsby'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

import Hero from '@components/Home/Hero'
import Sustainability from "@components/Home/Sustainability"
import Favorite from '@components/Home/Favorite'
import About from '@components/Home/About'
import Community from '@components/Home/Community'
import Gallery from '@components/Home/Gallery'

const IndexPage = ({ location, data }) => {

    const posts = data.allContentfulMenu.edges

    return (
        <Layout location={location}>
            <SEO title="美味しいコーヒーと共に" />
            <Hero />
            <Sustainability />
            <About />
            <Favorite posts={posts} />
            <Community />
            <Gallery />
        </Layout>
    )

}

export default IndexPage

export const pageQuery = graphql`
    query {
        allContentfulMenu (
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
    }
`