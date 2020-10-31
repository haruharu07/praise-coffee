import React from 'react'
import styled from 'styled-components'

import responsive from '@styles/responsive'

const HeroPage = ({ children }) => {
    return (
        <IndexContent>
            <HeroImage>{ children }</HeroImage>
        </IndexContent>
    )
}

export default HeroPage

const IndexContent = styled.div`
    height: 0;
    padding-bottom: 33%;
    position: relative;
    margin: 0 auto 7rem;
    ${responsive.lg} {
        padding-bottom: 47%;
    }
    ${responsive.sm} {
        padding-bottom: 54%;
        margin: 0 auto 4rem;
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