import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import responsive from '@styles/responsive'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'

import SiteLogo from '@images/logo_meta.jpg'

const NotFoundPage = ({location}) => (
    <Layout location={location}>
    <SEO title="404: Not found" />
            <Section>
                <Container>
                    <Headline>
                        <img src={SiteLogo} alt="Praise Coffee" />
                    </Headline>
                    <Text>
                        お探しのページは見つかりませんでした。
                    </Text>
                    <Btn>
                        <Link to="/">
                            TOPへもどる
                        </Link>
                    </Btn>
                </Container>
            </Section>
    </Layout>
)

export default NotFoundPage

const Section = styled.section`
    margin-top: 6rem;
    ${responsive.md} {
        margin-top: 4rem;
    }
`

const Headline = styled.h1`
    width: 120px;
    margin: 0 auto 3rem;
    ${responsive.sm} {
        width: 100px;
        margin: 0 auto 2rem;
    }
`

const Text = styled.p`
    text-align: center;
    line-height: 2;
    margin-bottom: 3.2rem;
    ${responsive.sm} {
        margin-bottom: 2.8rem;
    }
`

const Btn = styled.p`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16rem;
        height: 5rem;
        margin: auto;
        background-color: #555;
        color: #f6f6f6;
    }
    a:hover {
        color: #f6f6f6;
        opacity: .9;
    }
`