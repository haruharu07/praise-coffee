import React from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'

const NotFoundPage = ({location}) => (
    <Layout location={location}>
    <SEO title="404: Not found" />
        <Section>
            <Container>
                <h1>NOT FOUND</h1>
            </Container>
        </Section>
    </Layout>
)

export default NotFoundPage

const Section = styled.section``
