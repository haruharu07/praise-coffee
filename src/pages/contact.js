import React from 'react'
import styled from 'styled-components'

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
                                <label>お名前</label>
                                <input type="text" placeholder="Praise Coffee" name="name"/>
                            </Block>
                            <Block>
                                <label>メールアドレス</label>
                                <input type="email" placeholder="YourAdress@mail.com" name="name"/>
                            </Block>
                            <Block>
                                <label>お問い合わせ内容</label>
                                <textarea />
                            </Block>
                            <Block>
                                <input type="submit" value="送信" />
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

const Block = styled.div``