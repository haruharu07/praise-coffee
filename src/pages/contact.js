import React from 'react'
import styled from 'styled-components'

import responsive from '@styles/responsive'
import formStyle from '@styles/form'

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
                    <ContactForm>
                        <form name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact"/>
                            <Block>
                                <label for="name">お名前</label>
                                <input type="text" name="name" id="name" className="contactForm-input" />
                            </Block>
                            <Block>
                                <label>メールアドレス</label>
                                <input type="email" name="email" className="contactForm-input" />
                            </Block>
                            <Block>
                                <label>お問い合わせ内容</label>
                                <textarea name="message" rows="10" className="contactForm-input contactForm-message" />
                            </Block>
                            <Block>
                                <input type="submit" value="送信する" className="contactForm-submit" />
                            </Block>
                        </form>
                    </ContactForm>
                </Container>
            </Section>
        </Layout>
    )
}

export default Contact

const Section = styled.section``

const ContactForm = styled.div`
    ${formStyle}
`

const Block = styled.div`
    width: 60%;
    margin-bottom: 3rem;
    ${responsive.md} {
        width: 100%;
    }
    ${responsive.sm} {
        margin-bottom: 2.4rem;
    }

`