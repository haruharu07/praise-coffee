import React from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Container from '@components/Container'
import Headings from '@components/Headings'

const Privacy = ({ location }) => {
    return (
        <Layout location={location}>
        <SEO title="プライバシーポリシー" />
            <Section>
                <Container>
                    <Headings.h1>プライバシーポリシー</Headings.h1>
                        <Item>
                            <ItemTitle>
                                個人情報の取得と利用
                            </ItemTitle>
                            <ItemText>
                                当ウェブサイトでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力していただく場合があります。<br />
                                取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                            </ItemText>
                        </Item>
                        <Item>
                            <ItemTitle>
                                個人を識別することができない形での利用
                            </ItemTitle>
                            <ItemText>
                                当ウェブサイトでは、個人情報を統計情報その他の個人を識別することができない情報にして利用させていただく場合があります。
                            </ItemText>
                        </Item>
                        <Item>
                            <ItemTitle>
                                個人情報の第三者への提供
                            </ItemTitle>
                            <ItemText>
                                当ウェブサイトが取得した個人情報について、ご本人の同意を得ることなく第三者に提供することはいたしません。
                            </ItemText>
                        </Item>
                </Container>
            </Section>
        </Layout>
    )
}

export default Privacy

const Section = styled.section``

const Item = styled.dl`
    margin-bottom: 4rem;
    &:last-child {
        margin-bottom: 0;
    }
`

const ItemTitle = styled.dt`
    font-size: 2.4rem;
    color: #111;
    margin-bottom: 2rem;
`

const ItemText = styled.dd``