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
    /* box-shadow: rgba(0,0,0,0.08) 0px 30px 60px -10px, rgba(0,0,0,0.1) 0px 18px 36px -18px; */
    ${responsive.md} {
        margin-bottom: 0.5rem;
    }
`

const ItemText = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    transition: .4s;
    ${responsive.sm} {
        font-size: 1.2rem;
    }
`