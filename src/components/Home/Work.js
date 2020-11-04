import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import responsive from '@styles/responsive'
import GatsbyImage from 'gatsby-image'

import Container from '@components/Container'
import Headings from '@components/Headings'

const Work = ({ hero }) => {

    const thumbnail01 = hero.beans.fluid
    const thumbnail02 = hero.menu.fluid

    const block = [
    { filename: thumbnail01, alt: "コーヒー豆の販売", title: "コーヒー豆の販売", text: "コーヒーはフルーツの種です。フルーツでも様々な味があるように、コーヒーも個性豊かで産地農園や精製のプロセスによっても様々な味わいがあります。\nプレイズコーヒーでは素材の味がわかる焙煎度合いでコーヒーを焙煎しています。", url: "/beans", page: "コーヒー豆をみる" },
    { filename: thumbnail02, alt: "カフェの運営", title: "カフェの運営", text: "プレイズコーヒーでは、高品質なスペシャルティーコーヒーの豆を使用した様々なメニューをご用意しています。\nフレッシュで果実のような味やチョコレートのように甘いコーヒー、お花のような華やかなコーヒー、ミルクに合うコーヒーなど、個性豊かなコーヒーの味をお楽しみください。", url: "/menu", page: "カフェのメニューをみる" }
]

    return (
        <Section>
            <Container>
                <Headings.h2>Praise Coffeeの取り組み</Headings.h2>
                <BlockWrapper>
                    {block.map(post => (
                        <Link to={post.url} className="item-link">
                            <ItemImage className="item-image">
                                <GatsbyImage
                                    fluid={post.filename}
                                    alt={post.alt}
                                />
                            </ItemImage>
                            <TextBox className="item-textBox">
                                <ItemTitle>{post.title}</ItemTitle>
                                <ItemText>{post.text}</ItemText>
                                <ItemMore className="item-more">
                                    {post.page}<svg width="35" height="7" viewBox="0 0 35 7" version="1.1"><g fill="none"><g><path d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z" transform="matrix(0 1 -1 0 35 0)" fill="#212a2f"></path><line y1="-0.5" x2="30" y2="-0.5" transform="translate(0 4)" stroke="#212a2f"></line></g></g></svg>
                                </ItemMore>
                            </TextBox>
                        </Link>
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

const BlockWrapper = styled.div`
    .item-link {
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
        &:hover {
            color: inherit;
        }
        &:hover .item-image {
            box-shadow: rgba(0, 0, 0, 0.12) 0px 50px 80px -20px, rgba(0, 0, 0, 0.15) 0px 30px 50px -30px;
            transform: translateY(-1px);
            transition: all .5s;
        }
        &:hover .item-more {
            color: ${props => props.theme.colors.highlight};
        }
        &:hover svg {
            transform: translateX(2px);
            transition: all .5s;
        }
        &:hover svg path {
            fill: ${props => props.theme.colors.highlight};
            transition: all .5s;
        }
        &:hover svg line {
            stroke: ${props => props.theme.colors.highlight};
            transition: all .5s;
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
    }
`

const ItemImage = styled.div`
    height: 300px;
    background-color: #F7F0EA;
    grid-column: 1 / span 4;
    box-shadow: rgba(0,0,0,0.08) 0px 30px 60px -10px, rgba(0,0,0,0.1) 0px 18px 36px -18px;
    transition: all .5s;
    & > div {
        height: 100%;
    }
    ${responsive.md} {
        margin-bottom: 1rem;
    }
    ${responsive.sm} {
        height: 200px;
    }
`

const TextBox = styled.div`
    grid-column: 5 / 8;
    svg {
        transition: all .5s;
    }
    .item-more, svg path, svg line {
        transition: all .5s;
    }
`

const ItemTitle = styled.h3`
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 1.2rem;
    ${responsive.md} {
        margin-bottom: 0.6rem;
    }
    ${responsive.sm} {
        font-size: 2rem;
    }
`

const ItemText = styled.p`
    margin-bottom: 2rem;
    white-space: pre-wrap;
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