import React from 'react'
import styled from 'styled-components'
import responsive from '@styles/responsive'

import Container from '@components/Container'
import Headings from '@components/Headings'
import PostCard from '@components/PostCard'

const Favorite = ({ posts }) => {

    return (
        <Section className="section">
            <Container>
                <Headings.h2>お気に入りのコーヒー豆</Headings.h2>
                <ItemGrid>
                    {posts.map(({node}) => {
                        return (
                            <PostCard node={node} />
                        )
                    })}
                </ItemGrid>
            </Container>
        </Section>
    )

}

export default Favorite

const Section = styled.section``

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    .item-link {
        &:hover {
        opacity: 1;
        }
        &:hover .item-headline {
            transition: .4s;
            color: ${(props) => props.theme.colors.highlight};
        }
    }
    ${responsive.md} {
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 2.5rem;
    }
    ${responsive.sm} {
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
        row-gap: 2rem;
    }
`