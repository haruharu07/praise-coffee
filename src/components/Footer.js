import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import responsive from "@styles/responsive"

import NavigationFooter from '@components/Navigation/Navigation.Footer'
import Container from '@components/Container'

import Logo from '@images/logo_footer.png'
import Facebook from '@images/ic_facebook.svg'
import Instagram from '@images/ic_instagram.svg'
import Twitter from '@images/ic_twitter.svg'

const sns = [
    { url: "/", image: Facebook, alt: "Facebook" },
    { url: "/", image: Instagram, alt: "Instagram" },
    { url: "/", image: Twitter, alt: "Twitter" }
]

const Footer = () => {
    return (
        <GlobalFooter>
            <Container>
                <FooterInner>
                    <InContents>
                    <FooterLogo>
                        <Link to="/">
                            <img src={Logo} alt="Praise Coffee" />
                        </Link>
                    </FooterLogo>
                        <NavigationFooter />
                    </InContents>

                    <OutContents>
                        <IconList>
                            {sns.map(ic => (
                                <IconItem>
                                    <Link to={ic.url}>
                                        <img src={ic.image} alt={ic.alt} />
                                    </Link>
                                </IconItem>
                            ))}
                        </IconList>
                        <Copyright>
                            ©︎2020 Praise Coffee
                        </Copyright>
                    </OutContents>
                </FooterInner>
            </Container>
        </GlobalFooter>
    )
}

export default Footer

const GlobalFooter = styled.footer`
    background-color: #333;
    * {
        color: #e5e5e5;
    }
    a:hover {
        opacity: .5;
        color: inherit;
    }
`

const FooterInner = styled.div`
    padding: 6rem 0 10rem;
    display: flex;
    justify-content: space-between;
    ${responsive.md} {
        padding: 5rem 0 5rem;
        display: block;
    }
`

const InContents = styled.div`
    display: flex;
    ${responsive.md} {
        margin-bottom: 3rem;
        padding-bottom: 3rem;
        position: relative;
        &::after {
            display: block;
            content: "";
            width: 20px;
            height: 1px;
            background-color: #e5e5e5;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
`

const FooterLogo = styled.p`
    width: 78px;
    margin-right: 4rem;
    a {
        display: block;
    }
    ${responsive.md} {
        display: none;
    }
`

const OutContents = styled.div``

const IconList = styled.ul`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2.5rem;
    ${responsive.md} {
        justify-content: flex-start;
        margin-bottom: 2rem;
    }
`

const IconItem = styled.li`
    a {
        display: block;
        width: 18px;
        height: 18px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    &:not(:last-child) {
        margin-right: 2rem;
    }
    ${responsive.md} {
        &:not(:last-child) {
            margin-right: 1.2rem;
        }
    }
`

const Copyright = styled.p`
    font-size: 1.2rem;
    ${responsive.md} {
    }
`