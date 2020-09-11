import React from 'react'
import styled from 'styled-components'

import theme from '@styles/theme'
import responsive from '@styles/responsive'

const Container = ({ children }) => {
    return <IndexContent>{ children }</IndexContent>
}

export default Container

const IndexContent = styled.div`
    max-width: ${props => theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    ${responsive.md} {
        max-width: 960px;
    }
`