import React from 'react'
import styled, { ThemeProvider } from "styled-components"

import GlobalStyle from '@styles/global'
import theme from '@styles/theme'
import responsive from '@styles/responsive'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Contact from '@components/ContactBtn'


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
    if(location.pathname === "/contact" || location.pathname === "/thank-you") {
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
        <Footer />
        </>
        </ThemeProvider>
    )
}

export default Layout

const ContentHome = styled.div`
    min-height: 120vh;
    padding: 7rem 0 12rem;
    .section {
        margin-bottom: 10rem;
    }
    ${responsive.lg} {
        padding: 7rem 0 8rem;
        .section {
            margin-bottom: 8rem;
        }
    }
    ${responsive.md} {
        padding: 6rem 0 8rem;
    }
    ${responsive.sm} {
        .section {
            margin-bottom: 5rem;
        }
    }
`
const ContentPage = styled.div`
    min-height: 120vh;
    padding: 7rem 0 16rem;
    ${responsive.lg} {
        padding: 7rem 0 10rem;
    }
    ${responsive.md} {
        padding: 6rem 0 8rem;
    }
`