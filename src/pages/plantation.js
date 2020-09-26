import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import responsive from "@styles/responsive"

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'
import Headings from '@components/Headings'
import Image from '@components/Image'
import About from '@components/Home/About'

const block = [
    { filename: "img_coffee_beans.jpg", alt: "Praise Coffee", title: "美味しいコーヒーと共に人生に豊かな時間を。", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。" },
    { filename: "img_coffee_beans.jpg", alt: "Praise Coffee", title: "美味しいコーヒーと共に人生に豊かな時間を。", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。" },
    { filename: "img_coffee_beans.jpg", alt: "Praise Coffee", title: "美味しいコーヒーと共に人生に豊かな時間を。", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。" }
]

const Plantation = ({ data, location }) => {

    return (
        <Layout location={location}>
        <SEO title="農園について" />
            <Section>
                <Container>
                    <Headings.h1>農園について</Headings.h1>
                    <BlockWrapper>
                        {block.map(post => (
                            <Block>
                                <ItemImage className="story-image">
                                    <Image
                                        filename={post.filename}
                                        alt={post.alt}
                                    />
                                </ItemImage>
                                <TextBox>
                                    <ItemTitle>{post.title}</ItemTitle>
                                    <ItemText>{post.text}</ItemText>
                                </TextBox>
                            </Block>
                        ))}
                    </BlockWrapper>
                </Container>
            </Section>
            <About />
        </Layout>
    )
}

export default Plantation

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

const BlockWrapper = styled.div``

const Block = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    &:not(:last-child) {
        margin-bottom: 7rem;
    }
    &:nth-child(even) .story-image {
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
    ${responsive.lg} {
        height: 400px;
    }
    ${responsive.sm} {
        height: 212px;
    }
`

const TextBox = styled.div`
    padding-top: 1rem;
    ${responsive.lg} {
        padding-top: 2.4rem;
    }
`

const ItemTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 2rem;
    ${responsive.lg} {
        font-size: 2.0rem;
        margin-bottom: 1rem;
    }
`

const ItemText = styled.p``

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`