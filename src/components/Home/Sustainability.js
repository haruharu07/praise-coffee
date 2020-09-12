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
                            filename="img_cofee_beans_home.jpg"
                            alt="Praise Coffee"
                        />
                    </ItemImage>
                    <TextBox>
                        <Link to="/plantation">
                            <ItemTitle>
                                エシカルな調達
                            </ItemTitle>
                            <ItemText>
                                テキストテキストテキストテキストテキストテキスト<br />
                                農園のことを知ってみませんか？
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
    ${responsive.sm} {
        display: block;
    }
`

const ItemImage = styled.div`
    grid-column: 2 / 12;
    height: 32rem;
`

const TextBox = styled.div`
    grid-column: 13 / 23;
    padding-top: 7rem;
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
    ${responsive.sm} {
        padding-top: 0;
    }
`

const ItemTitle = styled.h2`
    font-size: 2.8rem;
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
    ${responsive.md} {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.highlight};
        svg path {
            fill: ${props => props.theme.colors.highlight};
        }
        svg line {
            stroke: ${props => props.theme.colors.highlight};
        }
    }
`