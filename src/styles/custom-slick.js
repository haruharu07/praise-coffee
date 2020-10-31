import { css } from 'styled-components'
import theme from '@styles/theme'

const customSlick = css`
    .card-link:hover, .card-link:focus {
        outline: none;
    }
    /*Favorit*/
    .item-grid .slick-dots {
        bottom: -33px;
    }
    .item-grid .slick-dots li button::before {
        content: "";
        font-size: 0px;
        line-height: normal;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        width: 10px;
        height: 10px;
        background: #212a2f;
        border-radius: 50%;
        opacity: 1;
    }
    .item-grid .slick-dots li.slick-active button::before {
        opacity: 1;
        background-color: transparent;
        box-shadow: 0 0 0 2px #212a2f;
    }

    /*Instagram*/
    .insta-gallery .slick-arrow {
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
    .insta-gallery .slick-next {
        left: calc(50% + 49.8rem);
    }
    .insta-gallery .slick-prev {
        left: calc(50% + 41.6rem);
    }
    @media screen and (max-width: ${props => theme.sizes.maxWidth}) {
        .insta-gallery .slick-arrow {
            top: 123%;
        }
        .insta-gallery .slick-next {
            left: calc(50% + 4.1rem);
        }
        .insta-gallery .slick-prev {
            left: calc(50% + -4.1rem);
        }
    }
    @media screen and (max-width: 920px) {
        .insta-gallery .slick-arrow {
            display: none!important;
        }
    }
`
export default customSlick