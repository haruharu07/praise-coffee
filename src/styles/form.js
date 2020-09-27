import { css } from 'styled-components'
import responsive from "@styles/responsive"

const formStyle = css`
    label {
        display: block;
        margin-bottom: 1rem;
    }
    .contactForm-input {
        width: 100%;
        border: 1px solid #555;
        padding: 1.6rem 2rem;
    }
    .contactForm-message {
        resize: auto;
        line-height: 1.75;
    }
    .contactForm-submit {
        width: 16rem;
        height: 5rem;
        border: 1px solid #555;
        background-color: #555;
        color: #f6f6f6;
        cursor: pointer;
        &:hover {
            opacity: .9;
        }
    }
    .contactForm-submit:disabled {
        background-color: #eee;
        border: none;
        cursor: default;
        &:hover {
            opacity: 1;
        }
    }
    ${responsive.sm} {
        .contactForm-input {
            padding: 1.2rem 1.8rem;
        }
    }
`
export default formStyle