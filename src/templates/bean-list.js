import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import responsive from '@styles/responsive'

import SEO from '@components/SEO'
import Layout from '@components/Layout'
import Container from '@components/Container'
import Headings from '@components/Headings'
import PostCard from '@components/PostCard'
import About from '@components/Home/About'


const BeanList = ({data, location}) => {

    const title = data.site.siteMetadata.title
    const posts = data.allContentfulMenu.edges

    return (
        <Layout location={location} title={title}>
            <SEO
                title="コーヒー豆"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
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
    margin-bottom: 10rem;
    &:last-child {
        margin-bottom: 0;
    }
    ${responsive.md} {
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
    ${responsive.md} {
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
    allContentfulMenu (
        sort: { fields: createdAt, order: DESC }
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
    }
`