import styled, { css } from "styled-components"
import responsive from "@styles/responsive"

const commonStyles = p => css`
    color: ${props => props.theme.colors.base};
    letter-spacing: 0.04rem;
`

const h1 = styled.h1`
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 5rem;
    ${commonStyles};
    ${responsive.lg} {
        font-size: 3.2rem;
        margin-bottom: 4rem;
    }
    ${responsive.sm} {
        font-size: 2.4rem;
        margin-bottom: 3.2rem;
    }
`

const h2 = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 4rem;
    ${commonStyles};
    ${responsive.lg} {
        margin-bottom: 3rem;
    }
    ${responsive.sm} {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
`

const h3 = styled.h3`
    font-size: 2.4rem;
    font-weight : 400;
    line-height: 1.75;
    ${commonStyles};

    ${responsive.sm} {
        font-size: 2rem;
    }
`

const h4 = styled.h4`
    font-size: 1.8rem;
    line-height: 1.5;
    ${commonStyles};

    ${responsive.sm} {
        font-size: 1.6rem;
    }
`

const h5 = styled.h5`
    font-size: 1.6rem;
    line-height: 1.45;
    ${commonStyles};
`

const h6 = styled.h6`
    font-size: 1.6rem;
    line-height: 1.45;
    ${commonStyles};

    ${responsive.sm} {
        font-size: 1.4rem;
    }
`

export default {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
}
