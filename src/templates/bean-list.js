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
                    <ItemMore>
                        <a href="https://praisecoffee.stores.jp/" target="_blank" rel="noopener noreferrer">
                            オンラインショップはこちら
                        </a>
                    </ItemMore>
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
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 4rem;
    row-gap: 4rem;
    .item-link {
        display: block;
        background-color: #fff;
        box-shadow: 0px 15px 30px rgba(0,0,0,0.02);
        transition: all .5s;
        &:hover {
            box-shadow: 0px 30px 60px rgba(0,0,0,0.05);
            transform: translateY(-1px);
            transition: all .5s;
        }
        &:hover .item-headline {
            transition: .5s;
            color: ${(props) => props.theme.colors.highlight};
        }
    }
    ${responsive.lg} {
        column-gap: 2rem;
        row-gap: 3rem;
    }
    ${responsive.md} {
        grid-template-columns: 1fr 1fr;
        column-gap: 2.5rem;
        row-gap: 2.5rem;
        .item-link {
            &:hover .item-headline {
                color: ${props => props.theme.colors.base};
            }
        }
    }
    ${responsive.sm} {
        grid-template-columns: 1fr;
        row-gap: 3rem;
    }
`

const ItemMore = styled.p`
    color: ${(props) => props.theme.colors.highlight};
    text-align: center;
    margin-top: 6rem;
    a:hover {
        text-decoration: underline;
    }
    ${responsive.sm} {
        margin-top: 4rem;
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