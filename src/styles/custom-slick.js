import { css } from 'styled-components'

const customSlick = css`
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
        @media screen and (max-width: 1040px) {
            display: none!important;
        }
    }
    .slick-next {
        left: calc(50% + 44.8rem);
    }
    .slick-prev {
        left: calc(50% + 36.6rem);
    }
`
export default customSlick