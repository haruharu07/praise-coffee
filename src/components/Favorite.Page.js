import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import responsive from '@styles/responsive'

import PostCard from '@components/PostCard'
import Container from '@components/Container'

const FavoritePage = ({ items }) => {

    return (
        <Section>
            <Container>
                <Line>
                    <Heading>Praise Coffee<br class="newline" />のお気に入り</Heading>
                </Line>
                <ItemGrid>
                    {items.map(({ node }) => {
                        return (
                            <PostCard node={node} />
                        )
                    })}
                </ItemGrid>
                <Line></Line>
                <ItemMore className="item-more">
                    <Link to="/beans">
                        すべてのコーヒー豆をみる
                    </Link>
                </ItemMore>
            </Container>
        </Section>
    )
}

export default FavoritePage

const Section = styled.section``

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    padding: 4rem 0 6rem;
    .item-link {
        &:hover {
        opacity: 1;
        }
        &:hover .item-headline {
            transition: .4s;
            color: ${(props) => props.theme.colors.highlight};
        }
    }
    ${responsive.lg} {
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 2.5rem;
        padding: 3rem 0 5rem;
    }
    ${responsive.sm} {
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
        row-gap: 2rem;
    }
`

const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::after {
        content: "";
        width: 75%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.25);
    }
    &:last-of-type::after {
        width: 100%;
    }
    ${responsive.lg} {
        &::after {
            width: 65%;
        }
    }
`
const Heading = styled.h2`
    width: 25%;
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.25);
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

const ItemMore = styled.p`
    color: ${(props) => props.theme.colors.highlight};
    text-align: center;
    margin-top: 6rem;
    a:hover {
        text-decoration: underline;
    }
    ${responsive.sm} {
        margin-top: 4rem;
    }
`