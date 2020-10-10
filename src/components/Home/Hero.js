import React from 'react'
import styled from 'styled-components'
import responsive from '@styles/responsive'
import GatsbyImage from 'gatsby-image'

import SiteLogo from "@images/logo.png"

const Hero = ({ hero }) => {

    const heroImage = hero.home.fluid

    return (
        <HeroFull>
            <HeroImageBlock>
                <HeroImage>
                    <GatsbyImage
                        fluid={heroImage}
                        alt="美味しいコーヒーと共に人生に豊かな時間を"
                    />
                </HeroImage>
            </HeroImageBlock>
            <HeroTextBlock>
                <HeroTextWrapper>
                    <HeroLogo>
                        <img src={SiteLogo} alt="Praise Coffee"/>
                    </HeroLogo>
                    <HeroText>
                        美味しいコーヒーと共に<br />
                        人生に豊かな時間を。
                    </HeroText>
                    <HeroBtn>
                        <a href="https://praisecoffee.stores.jp/" target="_blank" rel="noopener noreferrer" class="shop-btn">
                            SHOP NOW
                        </a>
                    </HeroBtn>
                </HeroTextWrapper>
            </HeroTextBlock>
        </HeroFull>
    )
}

export default Hero

const HeroFull = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8rem;
    ${responsive.lg} {
        flex-direction: column;
        margin-bottom: 5rem;
    }
    ${responsive.sm} {
        margin-bottom: 3rem;
    }
`

const HeroImageBlock = styled.div`
    flex: 1 1;
    height: 0;
    padding-bottom: 36%;
    position: relative;
    ${responsive.lg} {
        padding-bottom: 72%;
    }
    ${responsive.md} {
        padding-bottom: 68%;
    }
    ${responsive.sm} {
        padding-bottom: 80%;
    }
`

const HeroImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    & > div {
        height: 100%;
    }
`

const HeroTextBlock = styled.div`
    flex: 1 1;
    background-color: #f9f0e9;
`

const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    ${responsive.lg} {
        padding: 4.5rem 0;
    }
`

const HeroLogo = styled.p`
    width: 10rem;
    margin-bottom: 1.4rem;
    ${responsive.xlg} {
        width: 8.6rem;
        margin-bottom: 1rem;
    }
    ${responsive.sm} {
        width: 7.2rem;
    }
`

const HeroText = styled.p`
    font-size: 3.8rem;
    text-align: center;
    margin-bottom: 2.8rem;
    ${responsive.xlg} {
        font-size: 2.8rem;
        margin-bottom: 2.2rem;
    }
    ${responsive.sm} {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
`

const HeroBtn = styled.p`
    .shop-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Helvetica Neue;
        color: #111;
        border: 1px solid #111;
        padding: 1.5rem 3.2rem;
    }
    .shop-btn:hover {
        color: #f6f6f6;
        background-color: #111
    }
    ${responsive.xlg} {
        .shop-btn {
            padding: 1.3rem 3.2rem;
        }
    }
    ${responsive.sm} {
        .shop-btn {
            padding: 1rem 3rem;
        }
    }
`