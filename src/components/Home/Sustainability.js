import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import responsive from '@styles/responsive'

import Container from '@components/Container'
import Image from "@components/Image"

const Sustainability = () => {
    return(
        <Section className="section">
            <Container>
                <Block>
                    <ItemImage>
                        <Image
                            filename="img_coffee_beans_home.jpg"
                            alt="Coffee Beans"
                        />
                    </ItemImage>
                    <TextBox>
                        <Link to="/plantation">
                            <ItemTitle>
                                高品質のスペシャルティコーヒー
                            </ItemTitle>
                            <ItemText>
                                エシカルな調達。生産者の顔が見える関係性。美味しい一杯のコーヒーになるまでには、コーヒーを育てる良い環境の農園と、そこで働く農家の方々の情熱と努力があります。
                            </ItemText>
                            <ItemMore className="item-more">
                                    農園について<svg width="35" height="7" viewBox="0 0 35 7" version="1.1"><g fill="none"><g><path d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z" transform="matrix(0 1 -1 0 35 0)" fill="#212a2f"></path><line y1="-0.5" x2="30" y2="-0.5" transform="translate(0 4)" stroke="#212a2f"></line></g></g></svg>
                            </ItemMore>
                        </Link>
                    </TextBox>
                </Block>
            </Container>
        </Section>
    )
}

export default Sustainability

const Section = styled.section``

const Block = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    ${responsive.md} {
        display: block;
    }
`

const ItemImage = styled.div`
    grid-column: 2 / 12;
    height: 32rem;
    ${responsive.lg} {
        grid-column: 2 / 10;
        height: 30rem;
    }
    ${responsive.md} {
        width: 38rem;
        margin: auto;
    }
    ${responsive.sm} {
        width: 28rem;
        height: 26rem;
    }
`

const TextBox = styled.div`
    grid-column: 13 / 24;
    padding-top: 6rem;
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
        transform: translateX(1px);
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
    ${responsive.lg} {
        grid-column: 11 / 24;
    }
    ${responsive.md} {
        padding-top: 2rem;
    }
    ${responsive.sm} {
        padding-top: 0;
    }
`

const ItemTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    color: #111;
    margin-bottom: 2rem;
    ${responsive.sm} {
        font-size: 2.2rem;
        margin-bottom: 1rem;
    }
`

const ItemText = styled.p`
    margin-bottom: 1.5rem;
    ${responsive.sm} {
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