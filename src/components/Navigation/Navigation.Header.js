import React from "react"
import { Link } from 'gatsby'
import responsive from "@styles/responsive"

import styled from 'styled-components'

const NavItem = ({ navName, navLink, path }) => {
    return (
        <NavLink className={navLink === path && "active"}>
            <Link to={ navLink }>
                {navName}
            </Link>
        </NavLink>
    )
}

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
        <Nav>
            <NavList>
                <NavItem navName="ストーリー" navLink="/story" path={path} />
                <NavItem navName="コーヒー豆" navLink="/beans" path={path} />
                <NavItem navName="カフェのメニュー" navLink="/menu" path={path} />
                <NavItem navName="農園について" navLink="/plantation" path={path} />
                <NavItem navName="お店について" navLink="/shop-info" path={path} />
            </NavList>
        </Nav>

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

const Nav = styled.nav`
    ${responsive.lg} {
        display: none;
    }
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    .active {
        color: ${props => props.theme.colors.base};
    }
`

const NavLink = styled.li`
    margin-right: 3rem;
    color: rgba(0,0,0,0.5);
    &:last-child {
        margin-right: 0;
    }
    a:hover {
        color: ${props => props.theme.colors.base};
    }
`

const MenuBtn = styled.div`
    display: none;
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
        background-color: #111;
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
        background-color: #111;
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
    padding-top: 8rem;
`

const MobileNavList = styled.ul`
    .active {
        color: #111;
    }
`

const MobileNavLink = styled.li`
    color: rgba(0,0,0,0.5);
    position: relative;
    &:last-child::before {
        display: block;
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
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        opacity: 0;
        transform: translateX(-10px);
    }
    a:hover {
        color: #111;
    }
    ${responsive.lg} {
        a {
            font-size: 2.4rem;
        }
    }
    ${responsive.sm} {
        &:last-child::before {
            width: 160px;
        }
        a {
            font-size: 1.6rem;
        }
    }
`