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

const Menu = ({ data, location }) => {

    const heroImage = data.contentfulMainVisual.menu.fluid
    const posts = data.allContentfulCafe.edges

    return (
        <Layout location={location}>
        <SEO title="カフェのメニュー" />
            <Section>
                <HeroPage>
                    <GatsbyImage
                        fluid={heroImage}
                        alt="カフェのメニュー"
                    />
                </HeroPage>
                <Container>
                    <Headings.h1>カフェのメニュー</Headings.h1>
                    <ItemGrid>
                        {posts.map(({ node }) => {
                            return (
                                <Card>
                                    <ItemImageWrapper>
                                        <ItemImage>
                                            <GatsbyImage
                                                fluid={node.image.fluid}
                                                alt={node.title}
                                            />
                                        </ItemImage>
                                    </ItemImageWrapper>
                                    <ItemDetail>
                                    <ItemTitle>{node.title}</ItemTitle>
                                        <ItemType>
                                            <ItemCase>{node.type}</ItemCase>
                                            <ItemPrice>¥&nbsp;{node.price}</ItemPrice>
                                        </ItemType>
                                        <ItemDesc
                                            dangerouslySetInnerHTML={{__html:node.description.childMarkdownRemark.html}}
                                        />
                                    </ItemDetail>
                                </Card>
                            )
                        })}
                    </ItemGrid>
                </Container>
            </Section>
        </Layout>
    )
}

export default Menu

const Section = styled.section``

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    ${responsive.lg} {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    ${responsive.sm} {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    background-color: #fff;
    padding: 2.4rem;
    ${responsive.md} {
        padding: 2rem 2rem 3rem;
    }
`

const ItemImageWrapper = styled.div`
    height: 0;
    padding-bottom: 70%;
    position: relative;
    margin-bottom: 1.2rem;
    ${responsive.md} {
        padding-bottom: 60%;
    }
`

const ItemImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    & > div {
        height: 100%;
    }
`

const ItemDetail = styled.div``

const ItemTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 0.4rem;
`

const ItemType = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
`

const ItemCase = styled.p``

const ItemPrice = styled.p``

const ItemDesc = styled.div``

export const pageQuery = graphql`
    query {
        allContentfulCafe (
        sort: { fields: createdAt, order: ASC }
    ) {
        edges {
                node {
                    title
                    type
                    price
                    image {
                        fluid {
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
        }
        contentfulMainVisual {
            menu {
                fluid(maxWidth: 2000) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`