import React from 'react'
import { Link } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import styled from 'styled-components'

import responsive from '@styles/responsive'

const PostCard = ({node}) => {
    const title = node.title
    const featuredImage = node.featuredImage.fluid

    return (
        <Link to={`/beans/${node.slug}`} className="item-link">
            <ItemImage className="item-image">
                <GatsbyImage
                    fluid={featuredImage}
                    style={{ height: "100%" }}
                    alt={title}
                />
            </ItemImage>
            <ItemText className="item-headline">
                {title}
            </ItemText>
            <ItemBtn className="item-btn">
                Quick View
            </ItemBtn>
        </Link>
    )
}

export default PostCard


const ItemImage = styled.div`
    height: auto;
    margin-bottom: 1.2rem;
    transition: all .5s;
`

const ItemText = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
`
const ItemBtn = styled.p`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #555;
    color: #f6f6f6;
    margin: 15px 0 0;
    transition: all .5s;
    &:hover {
        opacity: .9;
    }
    ${responsive.sm} {
        margin: 12px 0 0;
    }
`