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
        </Link>
    )
}

export default PostCard


const ItemImage = styled.div`
    height: auto;
    margin-bottom: 1rem;
    transition: all .5s;
    ${responsive.lg} {
        margin-bottom: 0.5rem;
    }
`

const ItemText = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    ${responsive.sm} {
        font-size: 1.2rem;
    }
`