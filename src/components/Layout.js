import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"

import GlobalStyle from '@styles/global'
import theme from '@styles/theme'
import responsive from '@styles/responsive'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Contact from '@components/Contact'


const Layout = props => {
    const { location, children } = props
    const rootPath = `${__PATH_PREFIX__}/`

    let content;
    if(location.pathname === rootPath) {
        content = <ContentHome><main>{children}</main></ContentHome>
    } else {
        content = <ContentPage><main>{children}</main></ContentPage>
    }

    let contact;
    if(location.pathname === "/contact") {
        contact = ""
    } else {
        contact =
        <Contact />
    }

    return (
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyle />
        <Header location={location} />
        {content}
        {contact}
        <Helmet>
                <script type="text/javascript" src="//typesquare.com/3/tsst/script/ja/typesquare.js?5f645d9367344c5eb76b6c67ac1e02e5&fadein=1500" charset="utf-8"></script>
        </Helmet>
        <Footer />
        </>
        </ThemeProvider>
    )
}

export default Layout

const ContentHome = styled.div`
    min-height: 120vh;
    padding: 0 0 12rem;
    .section {
        margin-bottom: 10rem;
    }
    ${responsive.md} {
        padding: 0 0 8rem;
        .section {
            margin-bottom: 6rem;
        }
    }
`
const ContentPage = styled.div`
    min-height: 120vh;
    padding: 20rem 0 16rem;
    ${responsive.md} {
        padding: 15rem 0 10rem;
    }
    ${responsive.sm} {
        padding: 12rem 0 10rem;
    }
`