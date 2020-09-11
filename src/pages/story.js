import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'
import Headings from '@components/Headings'
import Image from '@components/Image'

const block = [
    { filename: "img_coffee_beans.jpg", alt: "Praise Coffee", title: "美味しいコーヒーと共に人生に豊かな時間を。", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。" },
    { filename: "img_coffee_beans.jpg", alt: "Praise Coffee", title: "美味しいコーヒーと共に人生に豊かな時間を。", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。" },
    { filename: "img_coffee_beans.jpg", alt: "Praise Coffee", title: "美味しいコーヒーと共に人生に豊かな時間を。", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。" }
]

const Story = ({ location }) => {

    return (
        <Layout location={location} >
        <SEO title="ストーリー" />
            <Section>
                <Container>
                    <Headings.h1>ストーリー</Headings.h1>
                    <BlockWrapper>
                        {block.map(post => (
                            <Block>
                                <ItemImage className="item-image">
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
        </Layout>
    )
}

export default Story

const Section = styled.section``

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
`

const ItemImage = styled.div`
    height: 300px;
    background-color: #F7F0EA;
`

const TextBox = styled.div`
    padding-top: 1rem;
`

const ItemTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 2rem;
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