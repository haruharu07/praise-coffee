import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import responsive from "@styles/responsive"

import Container from '@components/Container'

const About = () => {
    return (
        <Section className="section">
            <Container>
                <Line>
                    <Heading>Praise Coffee<br className="newline" />について</Heading>
                </Line>
                <ItemGrid>
                    <Link to="/story" className="item-link">
                        <ItemText>
                            沖縄本島の南、ハートの地形をしたハートのまち南城市からココロにまで染み渡る美味しいコーヒーを提供したい。週に2回オープンするコーヒー屋さんです。
                        </ItemText>
                        <ItemMore className="item-more">
                            ストーリーをみる<svg width="35" height="7" viewBox="0 0 35 7" version="1.1"><g fill="none"><g><path d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z" transform="matrix(0 1 -1 0 35 0)" fill="#212a2f"></path><line y1="-0.5" x2="30" y2="-0.5" transform="translate(0 4)" stroke="#212a2f"></line></g></g></svg>
                        </ItemMore>
                    </Link>
                </ItemGrid>
                <Line></Line>
            </Container>
        </Section>
    )
}

export default About

const Section = styled.section``

const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::after {
        content: "";
        width: 80%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.25);
    }
    &:last-of-type::after {
        width: 100%;
    }
    ${responsive.sm} {
        &::after {
            width: 65%;
        }
    }
`
const Heading = styled.h2`
    width: 20%;
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.25);
    padding-right: 1rem;
    .newline {
        display: none;
    }
    ${responsive.lg} {
        width: 35%;
    }
    ${responsive.sm} {
        font-size: 1.4rem;
        .newline {
            display: block;
        }
    }
`

const ItemGrid = styled.div`
    padding: 4rem 4rem 5rem;
    .item-link svg {
        transition: all .5s;
    }
    .item-link svg path, .item-link svg line {
        transition: all .5s;
    }
    .item-link:hover p {
        color: ${props => props.theme.colors.highlight};
        transition: all .5s;
    }
    .item-link:hover .item-more {
        color: ${props => props.theme.colors.highlight};
        transition: all .5s;
    }
    .item-link:hover svg {
        transform: translateX(2px);
        transition: all .5s;
    }
    .item-link:hover svg path {
        fill: ${props => props.theme.colors.highlight};
        transition: all .5s;
    }
    .item-link:hover svg line {
        stroke: ${props => props.theme.colors.highlight};
        transition: all .5s;
    }
    ${responsive.lg} {
        padding: 3rem 3rem 4rem;
    }
    ${responsive.sm} {
        padding: 2rem 0 3rem;
    }
`

const ItemText = styled.p`
    font-size: 3.2rem;
    margin-bottom: 2rem;
    color: rgba(0,0,0,0.5);
    line-height: 1.5;
    transition: all .5s;
    ${responsive.lg} {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }
    ${responsive.sm} {
        font-size: 2.2rem;
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
