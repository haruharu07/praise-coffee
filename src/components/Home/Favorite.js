import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import responsive from '@styles/responsive'
import customSlick from '@styles/custom-slick'

import Container from '@components/Container'
import Headings from '@components/Headings'
import PostCard from '@components/PostCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Favorite = ({ posts }) => {

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
                <Headings.h2>お気に入りのコーヒー豆</Headings.h2>
                <Slider {...settings} className="item-grid">
                    {posts.map(({node}) => {
                        return (
                            <PostCard node={node} />
                        )
                    })}
                </Slider>
            </Container>
        </Section>
    )
}

export default Favorite

const Section = styled.section`
    margin-bottom: 10rem;
    ${responsive.lg} {
        margin-bottom: 8rem;
    }
    .item-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 2.5rem;
        row-gap: 3rem;
        .item-link {
            display: block;
            background-color: #fdfdfd;
            box-shadow: 0px 15px 30px rgba(0,0,0,0.02);
            &:hover {
                box-shadow: 0px 30px 60px rgba(0,0,0,0.05);
                transform: translateY(-1px);
                transition: all .5s;
            }
            &:hover .item-headline {
                transition: .5s;
                color: ${props => props.theme.colors.highlight};
            }
            .item-headline {
                padding: 1rem 1rem 1.4rem;
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
        }
    }
    ${customSlick}
`