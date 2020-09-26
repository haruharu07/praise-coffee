import React from 'react'
import styled from 'styled-components'
import responsive from "@styles/responsive"

const BeanData = ({post}) => {
    return(
        <MenuBody>
            <MenuGroup>
                <MenuSection>
                    <MenuTitle>生産地</MenuTitle>
                    <MenuText>{post.origin}</MenuText>
                </MenuSection>
                <MenuSection>
                    <MenuTitle>品種</MenuTitle>
                    <MenuText>{post.varieties}</MenuText>
                </MenuSection>
            </MenuGroup>
            <MenuGroup>
                <MenuSection className="menu-section-sm">
                    <MenuTitle>標高</   MenuTitle>
                    <MenuText>{post.elevation}</MenuText>
                </MenuSection>
                <MenuSection className="menu-section-sm">
                    <MenuTitle>加工方法</MenuTitle>
                    <MenuText>{post.processing}</MenuText>
                </MenuSection>
                <MenuSection>
                    <MenuTitle>カッピングプロファイル</MenuTitle>
                    <MenuText>{post.cupping}</MenuText>
                </MenuSection>
            </MenuGroup>
        </MenuBody>
    )
}

export default BeanData

const MenuBody = styled.div`
    display: grid;
    grid-template-columns: 34rem 6rem 1fr;
    border: 1px solid #555;
    padding: 3rem;
    margin-bottom: 4rem;
    ${responsive.lg} {
        display: block;
        padding: 2rem;
        margin-bottom: 3rem;
    }
    ${responsive.sm} {
        margin-bottom: 2rem;
    }
`

const MenuGroup = styled.div`
    position: relative;
    grid-column: 1 / 2;
    &::after {
        content: "";
        width: 1px;
        height: 100%;
        background-color: #555;
        position: absolute;
        top: 0;
        right: -3rem;
        ${responsive.lg} {
            display: none;
        }
    }
    &:last-child::after {
        display: none;
    }
    &:nth-child(2) {
        grid-column: 3 / 4;
        display: grid;
        grid-template-columns: 1fr 1fr;
        .menu-section-sm:nth-child(1) {
            border-right: 1px solid #555;
            padding-right: 3rem;
            ${responsive.lg} {
                padding-right: 0;
                border-right: none;
                border-top: 1px solid #555;
                padding-top: 2rem;
                margin-top: 2.5rem;
            }
        }
        .menu-section-sm:nth-child(2) {
            padding-left: 3rem;
            ${responsive.lg} {
                padding-left: 0;
                border-top: 1px solid #555;
                padding-top: 2rem;
                margin-top: 2.5rem;
            }
        }
        ${responsive.lg} {
            display: block;
        }
    }
`

const MenuSection = styled.div`
    &:last-child {
        border-top: 1px solid #555;
        padding-top: 2.5rem;
        margin-top: 3rem;
        grid-column: 1 / span 2;
        ${responsive.lg} {
            padding-top: 2rem;
            margin-top: 2.5rem;
        }
    }
`

const MenuTitle = styled.h3`
    color: #111;
    font-weight: 400;
    margin-bottom: 1.5rem;
    ${responsive.lg} {
        margin-bottom: 1rem;
    }
`

const MenuText = styled.p`
    font-size: 1.4rem;
`