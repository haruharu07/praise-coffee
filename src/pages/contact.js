import React from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'
import Headings from '@components/Headings'

const Contact = ({ location }) => {

    return (
        <Layout location={location}>
        <SEO title="お問い合わせ" />
            <Section>
                <Container>
                    <Headings.h1>お問い合わせ</Headings.h1>
                    <p>Contact will be coming soon......</p>
                </Container>
            </Section>
        </Layout>
    )
}

export default Contact

const Section = styled.section``