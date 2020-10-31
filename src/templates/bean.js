import React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import styled from 'styled-components'
import responsive from '@styles/responsive'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Headings from '@components/Headings'
import Container from '@components/Container'
import BeanData from '@components/BeanData'
import FavoritePage from '@components/Favorite.Page'

const BeanPost = ({data, location}) => {
    const post = data.contentfulBeans
    const items = data.allContentfulBeans.edges

    return (
        <Layout location={location}>
        <SEO title={post.title} />
            <Section>
                <Container>
                    <Headings.h1>{post.title}</Headings.h1>
                    <MenuHead>
                        <MenuDesc
                            dangerouslySetInnerHTML={{__html:post.description.childMarkdownRemark.html}}
                        />
                        <FeaturedImage className="image-container">
                            <GatsbyImage
                                fluid={post.featuredImage.fluid}
                                alt={post.title}
                            />
                        </FeaturedImage>
                    </MenuHead>
                    <BeanData post={post} />
                    <Btn>
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                            このコーヒー豆をオンラインショップでみる
                        </a>
                    </Btn>
                </Container>
            </Section>
            <FavoritePage items={items} />
        </Layout>
        )
}

export default BeanPost

const Section = styled.section`
    margin-bottom: 10rem;
    &:first-child {
        margin-top: 6rem;
    }
    &:last-child {
        margin-bottom: 0;
    }
    ${responsive.lg} {
        margin-bottom: 8rem;
    }
    ${responsive.md} {
        &:first-child {
            margin-top: 4rem;
        }
    }
    ${responsive.sm} {
        margin-bottom: 6rem;
    }
`

const MenuHead = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    margin-bottom: 3rem;
    ${responsive.lg} {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 700px) {
        display: block;
    }
`

const MenuDesc = styled.div`
    font-size: 2.4rem;
    p {
        margin-bottom: 1em;
        white-space: pre-wrap;
        &:last-child {
            margin-bottom: 0;
        }
    }
    ${responsive.lg} {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    ${responsive.sm} {
        font-size: 1.6rem;
    }
`

const FeaturedImage = styled.div`
    height: auto;
    & > div {
    height: 100%;
    }
`

const Btn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #555;
        border-radius: 5px;
        color: #f6f6f6;
        line-height: 1;
        padding: 1.5rem 1rem;
    }
    a:hover {
        opacity: .9;
        color: #f6f6f6;
    }
    ${responsive.lg} {
        display: block;
        a {
            font-size: 1.4rem;
            padding: 1.5rem 1rem;
        }
    }
    ${responsive.sm} {
        a {
            padding: 1.2rem 1rem;
        }
    }
`

export const pageQuery = graphql`
    query blogPost ($slug: String!) {
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
        contentfulBeans (slug: { eq: $slug}) {
            title
            origin
            varieties
            elevation
            processing
            cupping
            url
            featuredImage {
                fluid(maxWidth: 1100) {
                    ...GatsbyContentfulFluid
                }
            }
            description {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
