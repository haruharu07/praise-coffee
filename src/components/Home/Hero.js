import React from 'react'
import styled from 'styled-components'
import responsive from '@styles/responsive'

import Image from '@components/Image'
import Container from '@components/Container'

const Hero = () => {
    return(
        <HeroWrapper>
        <HeroFull className="hero">
            <HeroImage>
                <Image
                    filename="bg_hero.jpg"
                    alt="Praise Coffee"
                />
            </HeroImage>
        </HeroFull>
        <HeroContent>
            <Container>
                <HeroBlock>
                    <HeroText>
                        美味しいコーヒーと共に、<br />
                            人生に豊かな時間を。
                        </HeroText>
                    <HeroTextSmall>
                            選び抜かれた産地と農園、<br className="newline" />素材を引き出す抽出と焙煎、<br />
                            一杯を囲むさまざまなシュチュエーション。
                        </HeroTextSmall>
                    <HeroBtn>
                        <a href="https://praisecoffee.stores.jp/" target="_blank" rel="noopener noreferrer" class="shop-btn">SHOP NOW</a>
                    </HeroBtn>
                </HeroBlock>
            </Container>
        </HeroContent>
        </HeroWrapper>
    )
}

export default Hero

const HeroWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    ${responsive.sm} {
        margin-bottom: 5rem;
    }
`

const HeroFull = styled.div`
    width: 100%;
    height: 0;
    padding-bottom:45.2857142857%;
    position: relative;
    margin-bottom: 10rem;
    ${responsive.lg} {
        padding-bottom:78.2857142857%;
        margin-bottom: 8rem;
    }
    ${responsive.sm} {
        padding-bottom:86.2857142857%;
        margin-bottom: 0;
    }
`

const HeroImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ${responsive.sm} {
        width: 180%;
        left: -22rem;
    }
`

const HeroContent = styled.div`
    width: 100%;
    padding: 0 2rem;
    position: absolute;
    top: 32%;
    left: 0;
    ${responsive.sm} {
        position: initial;
        background-color: #eeebe5;
        padding: 3.2rem 0 4rem;
    }
`

const HeroBlock = styled.div`
    position: absolute;
    top: 0;
    left: 6%;
    color: #111;
    ${responsive.lg} {
        left: 6%;
    }
    ${responsive.sm} {
        position: initial;
    }
`

const HeroText = styled.p`
    font-size: 3.6rem;
    line-height: 1.4;
    margin-bottom: 3rem;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    ${responsive.lg} {
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    ${responsive.sm} {
        font-size: 2.4rem;
    }
`

const HeroTextSmall = styled.p`
    margin-bottom: 3rem;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    .newline {
        display: none;
    }
    ${responsive.lg} {
        margin-bottom: 2rem;
        .newline {
            display: block;
        }
    }
`

const HeroBtn = styled.div`
    width: 16rem;
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
    ${responsive.sm} {
        .shop-btn {
            padding: 1rem 3.2rem;
        }
    }
`