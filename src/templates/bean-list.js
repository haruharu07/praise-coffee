import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import responsive from '@styles/responsive'
import GatsbyImage from 'gatsby-image'

import SEO from '@components/SEO'
import Layout from '@components/Layout'
import Container from '@components/Container'
import Headings from '@components/Headings'
import PostCard from '@components/PostCard'
import About from '@components/Home/About'
import HeroPage from '@components/Hero.Page'


const BeanList = ({data, location}) => {

    const title = data.site.siteMetadata.title
    const heroImage = data.contentfulMainVisual.beans.fluid
    const posts = data.allContentfulBeans.edges

    return (
        <Layout location={location} title={title}>
            <SEO
                title="コーヒー豆"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <HeroPage>
                <GatsbyImage
                    fluid={heroImage}
                    alt="コーヒー豆"
                />
            </HeroPage>
            <Section>
                <Container>
                    <Headings.h1>コーヒー豆</Headings.h1>
                    <ItemGrid>
                        {posts.map(({node}) => {
                            return (
                                <PostCard node={node} />
                            )
                        })}
                    </ItemGrid>
                </Container>
            </Section>
            <About />
        </Layout>
        )
}

export default BeanList

const Section = styled.section`
    margin-bottom: 12rem;
    &:last-child {
        margin-bottom: 0;
    }
    ${responsive.lg} {
        margin-bottom: 8rem;
    }
    ${responsive.sm} {
        margin-bottom: 6rem;
    }
`

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 3.8rem;
    .item-link {
        &:hover {
        opacity: 1;
        }
        &:hover .item-headline {
            transition: .4s;
            color: ${(props) => props.theme.colors.highlight};
        }
    }
    ${responsive.lg} {
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 2.5rem;
    }
    ${responsive.sm} {
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
        row-gap: 2rem;
    }
`

export const pageQuery = graphql`
query ($skip: Int!, $limit: Int!) {
    site {
        siteMetadata {
            title
        }
    }
    allContentfulBeans (
        sort: { fields: createdAt, order: ASC }
        limit: $limit
        skip: $skip
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
        contentfulMainVisual {
            beans {
                fluid(maxWidth: 2000) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`