import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'

import responsive from "@styles/responsive"

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'
import Headings from '@components/Headings'
import HeroPage from '@components/Hero.Page'


const ShopInfo = ({ data, location }) => {

    const heroImage = data.contentfulMainVisual.shopInfo.fluid
    const post = data.contentfulShopInfo

    return (
        <Layout location={location}>
        <SEO title="お店について" />
            <HeroPage>
                <GatsbyImage
                    fluid={heroImage}
                    alt="お店について"
                />
            </HeroPage>
            <Section>
                <Container>
                    <Headings.h1 className="shop-headline">お店について</Headings.h1>
                </Container>
                <Container>
                    <InfoWrapper>
                            <Info>
                                <InfoTitle>営業時間</InfoTitle>
                                <div dangerouslySetInnerHTML={{ __html: post.opening.childMarkdownRemark.html }} />
                            </Info>
                            <Info>
                                <InfoTitle>住所</InfoTitle>
                                <InfoText>{post.address}</InfoText>
                                <Btn>
                                    <a href="https://goo.gl/maps/SJWfHV97Yz1KXS8R9" target="_blank" rel="noopener noreferrer">Googleマップでみる</a>
                                </Btn>
                            </Info>
                            <Info>
                                <InfoTitle>電話番号</InfoTitle>
                                <InfoText>{post.number}</InfoText>
                            </Info>
                    </InfoWrapper>
                </Container>
            </Section>
        </Layout>
    )
}

export default ShopInfo

const Section = styled.section`
    .shop-headline {
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        padding-bottom: 2rem;
    }
    ${responsive.sm} {
        .shop-headline {
            padding-bottom: 1rem;
        }
    }
`

const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    row-gap: 5rem;
    ${responsive.lg} {
        display: block;
    }
`

const Info = styled.div`
    min-height: 18rem;
    padding-bottom: 5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    ${responsive.lg} {
        min-height: 16rem;
        padding-bottom: 5rem;
        margin-bottom: 4rem;
    }
    ${responsive.md} {
        width: 70%;
    }
    ${responsive.sm} {
        min-height: 14rem;
        padding-bottom: 4rem;
        margin-bottom: 3.2rem;
        &:first-child {
            padding-top: 1rem;
        }
        p {
            font-size: 1.6rem;
        }
    }
`

const InfoTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    color: #111;
    margin-bottom: 2.5rem;
    ${responsive.sm} {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
`

const InfoText = styled.p``

const Btn = styled.div`
    margin-top: 2rem;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        background-color: #555;
        border-radius: 5px;
        color: #f6f6f6;
        padding: 0.6rem 0.6rem;
    }
    a:hover {
        opacity: .9;
        color: #f6f6f6;
    }
    ${responsive.sm} {
        margin-top: 1rem;
        a {
            width: 100%;
            font-size: 1.4rem;
        }
    }
`

export const pageQuery = graphql`
    query {
        contentfulShopInfo {
            address
            number
            opening {
                childMarkdownRemark {
                    html
                }
            }
        }
        contentfulMainVisual {
            shopInfo {
                fluid(maxWidth: 2000) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`