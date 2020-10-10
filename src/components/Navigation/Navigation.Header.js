import React from "react"
import { Link } from 'gatsby'
import responsive from "@styles/responsive"

import styled from 'styled-components'

const MobileNavItem = ({ navName, navLink, path }) => {
    return (
        <MobileNavLink className={navLink === path && "active"}>
            <Link to={ navLink }>
                {navName}
            </Link>
        </MobileNavLink>
    )
}

const NavigationHeader = ({ location }) => {

    const path = location.pathname

    function activate() {
        document.querySelector(".menu-button").classList.toggle("open")
        document.querySelector(".mobile-nav").classList.toggle("show")
        document.body.classList.toggle("noscroll")
    }

    return (
        <>
        <MenuBtn className="menu-button" onClick={activate}></MenuBtn>
        <MobileNav className="mobile-nav" onClick={activate}>
            <MobileNavList>
                <MobileNavItem navName="ストーリー" navLink="/story" path={path} />
                <MobileNavItem navName="コーヒー豆" navLink="/beans" path={path} />
                <MobileNavItem navName="カフェのメニュー" navLink="/menu" path={path} />
                <MobileNavItem navName="農園について" navLink="/plantation" path={path} />
                <MobileNavItem navName="お店について" navLink="/shop-info" path={path} />
                <MobileNavItem navName="TOPへもどる" navLink="/" path={path} />
            </MobileNavList>
        </MobileNav>
        </>
    )
}

export default NavigationHeader

const MenuBtn = styled.div`
    display: block;
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    position: relative;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    position: relative;
    z-index: 100;
    ${responsive.lg} {
        display: block;
    }
    &::before {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.base};
        position: absolute;
        top: 5px;
        left: 0;
        border-radius: 4px;
        transition: all 0.2s;
    }
    &::after {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.base};
        position: absolute;
        bottom: 5px;
        left: 0;
        border-radius: 4px;
        transition: all 0.2s;
    }
`

const MobileNav = styled.nav`
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background};
    padding: 8vh 0 4vh;
    ${responsive.lg} {
        padding-top: 10vh 0 4vh;
    }
    ${responsive.sm} {
        padding-top: 6vh 0 2vh;
    }
`

const MobileNavList = styled.ul`
    width: 28vw;
    height: 100%;
    overflow-y: scroll;
    margin: 0 12rem 0 auto;
    .active {
        color: ${props => props.theme.colors.base};
    }
    ${responsive.lg} {
        width: 100vw;
        margin: auto;
    }
`

const MobileNavLink = styled.li`
    color: rgba(0,0,0,0.5);
    position: relative;
    &:last-child::before {
        display: none;
        content: "";
        width: 220px;
        height: 1px;
        background-color:rgba(0,0,0,0.25);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    a {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 2.4rem 0;
        opacity: 0;
        font-size: 2.8rem;
        transform: translateX(30px);
    }
    a:hover {
        color: #111;
    }
    ${responsive.lg} {
        &:last-child::before {
            display: block;
        }
        a {
            font-size: 2.2rem;
            justify-content: center;
            transform: translateX(0);
        }
    }
    ${responsive.sm} {
        &:last-child::before {
            width: 150px;
        }
        a {
            font-size: 1.6rem;
        }
    }
`