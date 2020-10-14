import { css } from 'styled-components'
import theme from '@styles/theme'

const customSlick = css`
    .card-link:hover, .card-link:focus {
        outline: none;
    }
    /*react-slick*/
    .slick-arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        top: -6.8rem;
        &::before {
            display: none;
        }
        &:hover {
            opacity: .9;
        }
    }
    .slick-next {
        left: calc(50% + 49.8rem);
    }
    .slick-prev {
        left: calc(50% + 41.6rem);
    }
    @media screen and (max-width: ${props => theme.sizes.maxWidth}) {
        .slick-arrow {
            top: 123%;
        }
        .slick-next {
            left: calc(50% + 4.1rem);
        }
        .slick-prev {
            left: calc(50% + -4.1rem);
        }
    }
    @media screen and (max-width: 920px) {
        .slick-arrow {
            display: none!important;
        }
    }
`
export default customSlick