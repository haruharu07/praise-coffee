import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import responsive from "@styles/responsive"

const NavItem = ({ navName, navLink }) => {
    return (
        <NavLink>
            <Link to={ navLink }>
                {navName}
            </Link>
        </NavLink>
    )
}

const NavigationFooter = () => {
    return (
        <NavWrapper>
            <NavList>
                <NavItem navName="ストーリー" navLink="/story" />
                <NavItem navName="コーヒー豆" navLink="/beans"/>
                <NavItem navName="カフェのメニュー" navLink="/menu"/>
                <NavItem navName="農園について" navLink="/plantation"/>
                <NavItem navName="お店について" navLink="/shop-info"/>
            </NavList>

            <SmallNavList>
                <SmallNavItem>
                    <a href="https://praisecoffee.stores.jp/" target="_blank" rel="noopener noreferrer">
                        オンラインショップ
                    </a>
                </SmallNavItem>
                <SmallNavItem>
                    <Link to="/privacy-policy">プライバシーポリシー</Link>
                </SmallNavItem>
            </SmallNavList>
        </NavWrapper>
    )
}

export default NavigationFooter

const NavWrapper = styled.div``

const NavList = styled.ul`
    display: flex;
    margin-bottom: 1.5rem;
    position: relative;
    ${responsive.md} {
        display: block;
        margin-bottom: 3rem;
        padding-bottom: 3rem;
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

const NavLink = styled.li`
    font-size: 1.6rem;
    &:not(:last-child) {
        margin-right: 2rem;
    }
    ${responsive.md} {
        font-size: 1.2rem;
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 1.2rem;
        }
    }
`

const SmallNavList = styled.ul`
    display: flex;
    ${responsive.md} {
        display: block;
    }
`

const SmallNavItem = styled.li`
    font-size: 1.2rem;
    position: relative;
    &:not(:last-child) {
        margin-right: 2.1rem;
    }
    &::after {
        content: "";
        width: 1px;
        height: 14px;
        background-color: #e5e5e5;
        position: absolute;
        top: 2px;
        right: -10px;
        ${responsive.md} {
            display: none;
        }
    }
    &:last-child::after {
        display: none;
    }
    ${responsive.md} {
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 1.2rem;
        }
    }
`