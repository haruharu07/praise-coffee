import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import responsive from '@styles/responsive'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'

import SiteLogo from '@images/logo_meta.jpg'

const ThankYou = ({location}) => {
    return (
        <Layout location={location}>
        <SEO title="お問い合わせいただきありがとうございました" />
            <Section>
                <Container>
                    <Headline>
                        <img src={SiteLogo} alt="Praise Coffee" />
                    </Headline>
                    <Text>
                        このたびは、お問い合わせいただき<br className="newline" />ありがとうございました。<br />
                        後日『Praise Coffee』からご連絡させていただきますので、少しばかりお待ちくださいませ。<br className="newline2" />
                        しばらくたっても連絡が届かない場合は、お手数ですがお電話をいただけますと嬉しいです。
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
}

export default ThankYou

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
    .newline {
        display: none;
    }
    ${responsive.sm} {
        margin-bottom: 2.8rem;
        .newline {
            display: block;
        }
        .newline2 {
            display: none;
        }
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