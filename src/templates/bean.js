import React from 'react'
import { Link, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import styled from 'styled-components'
import responsive from "@styles/responsive"

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Headings from '@components/Headings'
import Container from '@components/Container'
import BeanData from '@components/BeanData'
import PostCard from '@components/PostCard'

const BeanPost = ({data, location}) => {
    const post = data.contentfulMenu
    const posts = data.allContentfulMenu.edges

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

            <Section>
                <Container>
                    <Line>
                        <Heading>Praise Coffee<br class="newline" />のお気に入り</Heading>
                    </Line>
                    <ItemGrid>
                        {posts.map(({ node }) => {
                            return (
                                <PostCard node={node} />
                            )
                        })}
                    </ItemGrid>
                    <Line></Line>
                    <ItemMore className="item-more">
                        <Link to="/beans">
                            すべてのコーヒー豆をみる
                        </Link>
                    </ItemMore>
                </Container>
            </Section>
        </Layout>
        )
}

export default BeanPost

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

const MenuHead = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    margin-bottom: 3rem;
    ${responsive.md} {
        margin-bottom: 2rem;
    }
    ${responsive.sm} {
        display: block;
    }
`

const MenuDesc = styled.div`
    font-size: 2.4rem;
    p {
        margin-bottom: 1em;
        &:last-child {
            margin-bottom: 0;
        }
    }
    ${responsive.md} {
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
    ${responsive.sm} {
        margin: 0 4rem;
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
    ${responsive.md} {
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

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    padding: 4rem 0 6rem;
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
        padding: 3rem 0 5rem;
    }
    ${responsive.sm} {
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
        row-gap: 2rem;
    }
`

const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::after {
        content: "";
        width: 75%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.25);
    }
    &:last-of-type::after {
        width: 100%;
    }
    ${responsive.md} {
        &::after {
            width: 65%;
        }
    }
`
const Heading = styled.h2`
    width: 25%;
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.25);
    .newline {
        display: none;
    }
    ${responsive.md} {
        width: 35%;
    }
    ${responsive.sm} {
        font-size: 1.4rem;
        .newline {
           display: block;
         }
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
    query blogPost ($slug: String!) {
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
        contentfulMenu (slug: { eq: $slug}) {
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
