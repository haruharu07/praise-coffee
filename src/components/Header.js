import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import responsive from '@styles/responsive'
import navigationStyle from '@styles/navigation'

import NavigationHeader from '@components/Navigation/Navigation.Header'
import Container from '@components/Container'

import SiteLogo from '@images/logo.png'

const Header = ({location}) => {

    const rootPath = `${__PATH_PREFIX__}/`
    const logoLink = (
        <Link to="/">
            <img src={SiteLogo} alt="Praise Coffee"/>
        </Link>
    )

    let logo;
    if (location.pathname === rootPath) {
        logo = <LogoTop>{logoLink}</LogoTop>
    } else {
        logo = <LogoPage>{logoLink}</LogoPage>
    }

    return (
        <GlobalHeader>
            <Container>
                <HeaderInner>
                    {logo}
                    <NavigationHeader location={location} />
                </HeaderInner>
            </Container>
        </GlobalHeader>
    )
}

export default Header

const GlobalHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    ${navigationStyle}
`

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0 0;
    position: relative;
    ${responsive.lg} {
        padding: 2rem 0 0;
    }
`

const LogoTop = styled.h1`
    width: 100px;
    a {
        display: block;
    }
    ${responsive.lg} {
        width: 82px;
        position: relative;
        z-index: 100;
    }
    ${responsive.sm} {
        width: 64px;
    }
`

const LogoPage = styled.p`
    width: 100px;
    a {
        display: block;
    }
    ${responsive.lg} {
        width: 82px;
        position: relative;
        z-index: 100;
    }
    ${responsive.sm} {
        width: 64px;
    }
`