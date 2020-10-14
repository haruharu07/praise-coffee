import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import responsive from '@styles/responsive'
import GatsbyImage from 'gatsby-image'

import Container from '@components/Container'
import Headings from '@components/Headings'
// import Image from '@components/Image'

const Work = ({ hero }) => {

    const thumbnail01 = hero.beans.fluid
    const thumbnail02 = hero.menu.fluid

    const block = [
    { filename: thumbnail01, alt: "Praise Coffee", text: "コーヒー豆を販売していますコーヒー豆を販売していますコーヒー豆を販売していますコーヒー豆を販売していますコーヒー豆を販売していますコーヒー豆を販売していますコーヒー豆を販売していますコーヒー豆を販売していますコーヒー豆を販売しています", url: "/beans", page: "コーヒー豆をみる" },
    { filename: thumbnail02, alt: "Praise Coffee", text: "カフェをやっていますカフェをやっていますカフェをやっていますカフェをやっていますカフェをやっていますカフェをやっていますカフェをやっていますカフェをやっていますカフェをやっていますカフェをやっていますカフェをやっていますカフェをやっています", url: "/menu", page: "カフェのメニューをみる" }
]

    return (
        <Section>
            <Container>
                <Headings.h2>Praise Coffeeの取り組み</Headings.h2>
                <BlockWrapper>
                    {block.map(post => (
                        <Block>
                            <ItemImage className="item-image">
                                <Link to={post.url}>
                                    <GatsbyImage
                                        fluid={post.filename}
                                        alt={post.alt}
                                    />
                                </Link>
                            </ItemImage>
                            <TextBox className="item-textBox">
                                <Link to={post.url}>
                                    <ItemText>{post.text}</ItemText>
                                    <ItemMore className="item-more">
                                        {post.page}<svg width="35" height="7" viewBox="0 0 35 7" version="1.1"><g fill="none"><g><path d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z" transform="matrix(0 1 -1 0 35 0)" fill="#212a2f"></path><line y1="-0.5" x2="30" y2="-0.5" transform="translate(0 4)" stroke="#212a2f"></line></g></g></svg>
                                    </ItemMore>
                                </Link>
                            </TextBox>
                        </Block>
                    ))}
                </BlockWrapper>
            </Container>
        </Section>
    )
}

export default Work

const Section = styled.section`
    margin-bottom: 12rem;
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
    grid-template-columns: repeat(7, 1fr);
    column-gap: 3rem;
    &:not(:last-child) {
        margin-bottom: 7rem;
    }
    &:nth-child(even) .item-image {
        grid-column: 4 / span 7;
        grid-row: 1;
    }
    &:nth-child(even) .item-textBox {
        grid-column: 1 / 4;
    }
    ${responsive.lg} {
        display: block;
        &:not(:last-child) {
            margin-bottom: 4rem;
        }
    }
    ${responsive.sm} {
        &:not(:last-child) {
            margin-bottom: 3.5rem;
        }
    }
`

const ItemImage = styled.div`
    height: 300px;
    background-color: #F7F0EA;
    grid-column: 1 / span 4;
    a {
        display: block;
        height: 100%;
        & > div {
            height: 100%;
        }
    }
    a:hover {
        opacity: .9;
    }
    ${responsive.sm} {
        height: 200px;
    }
`

const TextBox = styled.div`
    grid-column: 5 / 8;
    padding-top: 1.2rem;
    a {
        display: block;
    }
    a svg {
        transition: all .5s;
    }
    a:hover {
        color: inherit;
    }
    a:hover .item-more {
        color: ${props => props.theme.colors.highlight};
    }
    a .item-more, a svg path, a svg line {
        transition: all .5s;
    }
    a:hover svg {
        transform: translateX(2px);
        transition: all .5s;
    }
    a:hover svg path {
        fill: ${props => props.theme.colors.highlight};
        transition: all .5s;
    }
    a:hover svg line {
        stroke: ${props => props.theme.colors.highlight};
        transition: all .5s;
    }
`

const ItemText = styled.p`
    margin-bottom: 2rem;
    ${responsive.lg} {
        margin-bottom: 1rem;
    }
`

const ItemMore = styled.p`
    display: flex;
    align-items: center;
    svg {
        margin-left: 1rem;
    }
    ${responsive.lg} {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.highlight};
        svg path {
            fill: ${props => props.theme.colors.highlight};
        }
        svg line {
            stroke: ${props => props.theme.colors.highlight};
        }
    }
`