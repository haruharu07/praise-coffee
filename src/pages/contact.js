import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import responsive from '@styles/responsive'
import formStyle from '@styles/form'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'
import Headings from '@components/Headings'


const Contact = ({ location }) => {

        function formData() {
            const formName = document.getElementById('name');
            const formEmail = document.getElementById('email');
            const formMessage = document.getElementById('message');
            (formName.value.length < 1 )?document.getElementById('submit').disabled = true:
            (formEmail.value.length < 2 )?document.getElementById('submit').disabled = true:
            (formMessage.value.length < 2 )?document.getElementById('submit').disabled = true:document.getElementById('submit').disabled = false;
        }

    return (
        <Layout location={location}>
        <SEO
            title="お問い合わせ"
            description="『Praise Coffee』へのお問い合わせは、下記フォームからご連絡ください。電話番号や住所、営業時間など、お店の情報については「お店について」のページに記載しております。"
        />
            <Section>
                <Container>
                    <Headings.h1>お問い合わせ</Headings.h1>
                    <Copy>
                        『Praise Coffee』へのお問い合わせは、下記フォームからご連絡ください。<br />
                        電話番号や住所、営業時間など、お店の情報については「<Link to="/shop-info">お店について</Link>」のページに記載しております。
                    </Copy>
                    <ContactForm>
                        <form name="contact" method="POST" data-netlify="true" action="/thank-you">
                            <input type="hidden" name="form-name" value="contact"/>
                            <Block>
                                <label for="name">お名前</label>
                                <input type="text" name="name" id="name" onKeyUp={formData} className="contactForm-input" />
                            </Block>
                            <Block>
                                <label>メールアドレス</label>
                                <input type="email" name="email" id="email" onKeyUp={formData} className="contactForm-input" />
                            </Block>
                            <Block>
                                <label>お問い合わせ内容</label>
                                <textarea name="message" id="message" rows="10" onKeyUp={formData} className="contactForm-input contactForm-message" />
                            </Block>
                            <Block>
                                <input type="submit" id="submit" disabled value="送信する" className="contactForm-submit" />
                            </Block>
                        </form>
                    </ContactForm>
                </Container>
            </Section>
        </Layout>
    )
}

export default Contact

const Section = styled.section`
    margin-top: 6rem;
    ${responsive.md} {
        margin-top: 4rem;
    }
`

const Copy = styled.p`
    margin-bottom: 4rem;
    a {
        color: ${props => props.theme.colors.highlight};
    }
    a:hover {
        text-decoration: underline;
    }
    ${responsive.sm} {
        margin-bottom: 3rem;
    }
`

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