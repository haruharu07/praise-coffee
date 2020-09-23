import { css } from 'styled-components'

const navigationStyle = css`
/*menu-btn*/
    .menu-button.open {
        transform: rotate(135deg);
        transition: transform 220ms cubic-bezier(0.215, 0.61, 0.355, 1) 120ms;
    }
    .menu-button.open::before {
        top: calc(50% - 1px);
        transition: all 0.2s;
    }
    .menu-button.open::after {
        bottom: calc(50% - 1px);
        transform: rotate(-90deg);
        transition: all 0.2s;
    }

    /*menu-nav*/
    .mobile-nav.show {
        visibility: visible;
        opacity: 1;
        transition: all 0.5s;
    }
    .mobile-nav.show a {
        opacity: 1;
        transform: translateX(0px);
    }
    body.noscroll {
        overflow: hidden;
    }
`
export default navigationStyle
