import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Slider from 'react-slick'

import responsive from '@styles/responsive'
import customSlick from '@styles/custom-slick'

import PostCard from '@components/PostCard'
import Container from '@components/Container'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FavoritePage = ({ items }) => {

    const settings = {
        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick',
            },
            {
                breakpoint: 500,
                settings: {
                    settings: 'slick',
                    dots: true,
                    arrows: false,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                },
            },
        ]
    }

    return (
        <Section>
            <Container>
                <Line>
                    <Heading>Praise Coffee<br class="newline" />のお気に入り</Heading>
                </Line>
                <Slider {...settings} className="item-grid">
                    {items.map(({ node }) => {
                        return (
                            <PostCard node={node} />
                        )
                    })}
                </Slider>
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

const Section = styled.section`
    .item-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 2.5rem;
        row-gap: 3rem;
        margin: 4rem 0 6rem;
        .item-link {
            display: block;
            background-color: #fff;
            box-shadow: 0px 15px 30px rgba(0,0,0,0.05);
            &:hover {
                box-shadow: 0px 30px 60px rgba(0,0,0,0.08);
                transform: translateY(-1px);
                transition: all .5s;
            }
            &:hover .item-headline {
                transition: .4s;
                color: ${(props) => props.theme.colors.highlight};
            }
            .item-btn {
                display: none;
            }
        }
        ${responsive.md} {
            grid-template-columns: 1fr 1fr;
            .item-link {
                &:hover .item-headline {
                    color: ${props => props.theme.colors.base};
                }
            }
        }
        ${responsive.sm} {
            display: block;
            margin: 3rem 0 7rem;
        }
    }
    ${customSlick}
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