import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import responsive from '@styles/responsive'

import Container from '@components/Container'

const Contact = () => {

    return (
        <ContactNav>
            <Container>
                <ContactBtn>
                    <Link to="/contact">
                        お問い合わせ
                    </Link>
                </ContactBtn>
            </Container>
        </ContactNav>
    )
}

export default Contact

const ContactNav = styled.div`
    background-color: #eee;
`
const ContactBtn = styled.p`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem 0;
        width: 100%;
        height: 100%;
        font-size: 1.8rem;
        line-height: 1;
    }
    a:hover {
        color: inherit;
    }
    ${responsive.sm} {
        a {
            padding: 3rem 0;
            font-size: 1.6rem;
        }
    }
`