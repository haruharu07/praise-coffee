import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'

import responsive from '@styles/responsive'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'
import Headings from '@components/Headings'
import HeroPage from '@components/Hero.Page'
import FavoritePage from '@components/Favorite.Page'


const Story = ({ data, location }) => {

    const heroImage = data.contentfulMainVisual.story.fluid
    const posts = data.allContentfulStory.edges
    const items = data.allContentfulBeans.edges

    return (
        <Layout location={location} >
        <SEO title="ストーリー" />
            <HeroPage>
                <GatsbyImage
                        fluid={heroImage}
                        alt="ストーリー"
                    />
            </HeroPage>
            <Section>
                <Container>
                    <Headings.h1>ストーリー</Headings.h1>
                    <BlockWrapper>
                        {posts.map(({node}) => {
                            return (
                                <Block>
                                    <ItemImage className="item-image">
                                        <GatsbyImage
                                            fluid={node.image.fluid}
                                            alt={node.title}
                                        />
                                    </ItemImage>
                                    <TextBox>
                                        <ItemTitle>{node.title}</ItemTitle>
                                        <ItemText
                                            dangerouslySetInnerHTML={{__html:node.text.childMarkdownRemark.html}}
                                        />
                                        <ItemAccent>「{node.accent}」</ItemAccent>
                                    </TextBox>
                                </Block>
                            )
                        })}
                    </BlockWrapper>
                </Container>
            </Section>
            <FavoritePage items={items} />
        </Layout>
    )
}

export default Story

const Section = styled.section`
    margin-bottom: 10rem;
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

const BlockWrapper = styled.div``

const Block = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    &:not(:last-child) {
        margin-bottom: 7rem;
    }
    &:nth-child(even) .item-image {
        grid-column: 2 / 3;
        grid-row: 1;
    }
    ${responsive.lg} {
        display: block;
    }
    ${responsive.sm} {
        &:not(:last-child) {
            margin-bottom: 5rem;
        }
    }
`

const ItemImage = styled.div`
    height: 300px;
    background-color: #F7F0EA;
    & > div {
        height: 100%;
    }
    ${responsive.lg} {
        height: 400px;
    }
    ${responsive.sm} {
        height: 212px;
    }
`

const TextBox = styled.div`
    ${responsive.lg} {
        padding-top: 2.4rem;
    }
`

const ItemTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 2rem;
    ${responsive.lg} {
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
    }
`

const ItemText = styled.div`
    margin-bottom: 1rem;
    p {
        white-space: pre-wrap;
    }
`

const ItemAccent = styled.p`
    color: #000;
`

export const pageQuery = graphql`
    query {
        allContentfulStory (
            sort: { fields: createdAt, order: ASC }
        ) {
            edges {
                node {
                    title
                    accent
                    text {
                        childMarkdownRemark {
                            html
                        }
                    }
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
        allContentfulBeans (
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
        contentfulMainVisual {
            story {
                fluid (maxWidth: 2000) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`