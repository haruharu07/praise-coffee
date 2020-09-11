import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'
import Headings from '@components/Headings'

const Menu = ({ data, location }) => {

    return (
        <Layout location={location}>
        <SEO title="カフェのメニュー" />
            <Section>
                <Container>
                    <Headings.h1>カフェのメニュー</Headings.h1>
                    <p>Menu will be coming soon......</p>
                </Container>
            </Section>
        </Layout>
    )
}

export default Menu

const Section = styled.section``

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`