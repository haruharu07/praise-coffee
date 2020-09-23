import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import responsive from "@styles/responsive"

import NavigationFooter from '@components/Navigation/Navigation.Footer'
import Container from '@components/Container'

import Logo from '@images/logo_footer.png'
// import Facebook from '@images/ic_facebook.svg'
// import Instagram from '@images/ic_instagram.svg'
// import Twitter from '@images/ic_twitter.svg'

// const sns = [
//     { url: "/", image: Facebook, alt: "Facebook" },
//     { url: "/", image: Instagram, alt: "Instagram" },
//     { url: "/", image: Twitter, alt: "Twitter" }
// ]

const Footer = () => {
    return (
        <GlobalFooter>
            <Container>
                <FooterInner>
                    <InContents>
                    <FooterLogo>
                        <Link to="/">
                            <img src={Logo} alt="Praise Coffee" />
                        </Link>
                    </FooterLogo>
                        <NavigationFooter />
                    </InContents>

                    <OutContents>
                        <IconList>
                            {/* {sns.map(ic => (
                                <IconItem>
                                    <Link to={ic.url}>
                                        <img src={ic.image} alt={ic.alt} />
                                    </Link>
                                </IconItem>
                            ))} */}
                            <IconItem>
                                <Link to="#">
                                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.49273 19.0018V10.3311H9.43316L9.88357 6.95173H6.48423V4.79664C6.48423 3.82391 6.76468 3.15307 8.1839 3.15307H10.0025V0.134266C9.1275 0.0424184 8.24804 -0.00237085 7.36806 9.66318e-05C4.73357 9.66318e-05 2.94892 1.57658 2.94892 4.46122V6.96011H0V10.3311H2.95742V19.0018H6.49273Z" fill="#E5E5E5"/>
                                    </svg>
                                </Link>
                            </IconItem>
                            <IconItem>
                                <Link to="#">
                                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0008 2.24927C22.1399 2.63626 21.2268 2.88992 20.2919 3.00181C21.2746 2.40184 22.0099 1.45994 22.3615 0.350808C21.4362 0.912084 20.4232 1.30832 19.3665 1.52238C18.6589 0.741326 17.716 0.22146 16.686 0.0445131C15.6561 -0.132434 14.5975 0.043574 13.6766 0.544865C12.7558 1.04616 12.025 1.8443 11.5991 2.81382C11.1732 3.78333 11.0763 4.86924 11.3237 5.90081C9.44632 5.80338 7.61009 5.30529 5.93452 4.43896C4.25894 3.57262 2.78155 2.35744 1.59845 0.872457C0.989444 1.92906 0.801787 3.18267 1.07405 4.37559C1.34632 5.5685 2.05782 6.61007 3.06229 7.28618C2.3133 7.26222 1.58074 7.05701 0.925418 6.68756V6.73887C0.923647 7.84702 1.30001 8.92151 1.99035 9.77917C2.68069 10.6368 3.64228 11.2246 4.71122 11.4423C4.01737 11.635 3.28941 11.6642 2.58276 11.5278C2.87852 12.4845 3.46228 13.3226 4.25169 13.9241C5.04111 14.5255 5.99635 14.8599 6.9827 14.88C5.3126 16.2123 3.25033 16.9352 1.12733 16.9324C0.750226 16.9264 0.373799 16.8979 0 16.8469C2.15814 18.2564 4.66987 19.0045 7.23509 19.0019C15.9172 19.0019 20.6621 11.6903 20.6621 5.35351L20.6452 4.72924C21.5691 4.05138 22.3668 3.2116 23.0008 2.24927Z" fill="#E5E5E5"/>
                                    </svg>
                                </Link>
                            </IconItem>
                            <IconItem>
                                <Link to="#">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.49418 1.70729C12.0343 1.70729 12.3383 1.71978 13.3377 1.76558C14.2662 1.80722 14.7659 1.96546 15.1032 2.09871C15.5151 2.2504 15.8879 2.49226 16.1942 2.80661C16.5086 3.11296 16.7504 3.48572 16.9021 3.89761C17.0271 4.23074 17.1853 4.73043 17.2353 5.66319C17.2769 6.66258 17.2852 6.96239 17.2852 9.49417C17.2852 12.0259 17.2769 12.3383 17.2311 13.3376C17.1895 14.2662 17.0229 14.7659 16.898 15.1032C16.74 15.513 16.498 15.8852 16.1874 16.1958C15.8769 16.5063 15.5047 16.7484 15.0949 16.9063C14.7618 17.0312 14.2621 17.1894 13.3293 17.2311C12.3299 17.2727 12.0301 17.2894 9.49001 17.2894C6.9499 17.2894 6.65842 17.2769 5.65903 17.2311C4.7346 17.1894 4.23074 17.0354 3.89345 16.9063C3.48156 16.7546 3.1088 16.5127 2.80245 16.1984C2.48758 15.8908 2.24568 15.5166 2.09455 15.1032C1.9613 14.7701 1.80306 14.2704 1.76142 13.3376C1.71978 12.3383 1.70729 12.0384 1.70729 9.49833C1.70729 6.95823 1.71978 6.66674 1.76558 5.66735C1.80722 4.74292 1.96546 4.23906 2.09871 3.90177C2.2504 3.48988 2.49227 3.11712 2.80661 2.81077C3.11296 2.49643 3.48572 2.25456 3.89761 2.10288C4.23074 1.96962 4.73043 1.81139 5.66319 1.76975C6.66258 1.72811 6.9624 1.71561 9.49418 1.71561V1.70729ZM9.49418 0.00832822C6.91243 0.00832822 6.59595 0.0208205 5.57991 0.0666258C4.56387 0.112431 3.88512 0.266503 3.28132 0.499693C2.64759 0.738068 2.07348 1.11181 1.59902 1.59485C1.11447 2.0689 0.739288 2.64304 0.499693 3.27715C0.266503 3.88095 0.104103 4.56803 0.0582976 5.58407C0.0124923 6.60011 0 6.92491 0 9.49417C0 12.0634 0.0124923 12.409 0.0582976 13.4168C0.104103 14.4245 0.266503 15.124 0.499693 15.7237C0.738069 16.3574 1.11181 16.9315 1.59485 17.406C2.06931 17.889 2.64342 18.2628 3.27716 18.5011C3.88095 18.7343 4.56803 18.8967 5.58407 18.9425C6.60012 18.9883 6.92492 18.9967 9.49834 18.9967C12.0718 18.9967 12.4132 18.9842 13.4209 18.9384C14.4286 18.8926 15.1282 18.7302 15.7279 18.4928C16.3586 18.2486 16.9314 17.8755 17.4097 17.3972C17.888 16.9189 18.2611 16.3461 18.5053 15.7154C18.7385 15.1116 18.9009 14.4245 18.9467 13.4084C18.9925 12.3924 19.0008 12.0759 19.0008 9.49417C19.0008 6.91242 18.9884 6.58762 18.9425 5.57991C18.8967 4.57219 18.7343 3.87262 18.497 3.26883C18.2588 2.63845 17.8865 2.06731 17.406 1.59485C16.9315 1.11181 16.3574 0.738068 15.7237 0.499693C15.1199 0.266503 14.4328 0.104103 13.4168 0.0582975C12.4007 0.0124923 12.0843 0 9.5025 0" fill="#E5E5E5"/>
                                        <path d="M9.49409 4.62207C8.52867 4.6229 7.58519 4.91004 6.78299 5.44716C5.98079 5.98429 5.35592 6.74728 4.98742 7.6396C4.61893 8.53192 4.52336 9.51349 4.71282 10.4601C4.90227 11.4068 5.36824 12.276 6.05176 12.9577C6.73529 13.6395 7.60566 14.1033 8.55279 14.2903C9.49992 14.4773 10.4812 14.3792 11.3726 14.0085C12.264 13.6377 13.0254 13.0109 13.5604 12.2073C14.0955 11.4037 14.3802 10.4595 14.3786 9.49408C14.3764 8.20046 13.8607 6.96063 12.9448 6.04707C12.0289 5.13351 10.7877 4.62097 9.49409 4.62207ZM9.49409 12.6671C8.86816 12.6671 8.2563 12.4815 7.73586 12.1338C7.21543 11.786 6.80979 11.2918 6.57026 10.7135C6.33073 10.1352 6.26806 9.4989 6.39017 8.885C6.51228 8.27111 6.8137 7.70721 7.25629 7.26461C7.69888 6.82202 8.26278 6.52061 8.87668 6.3985C9.49058 6.27638 10.1269 6.33906 10.7052 6.57859C11.2835 6.81812 11.7777 7.22375 12.1255 7.74418C12.4732 8.26462 12.6588 8.87649 12.6588 9.50241C12.6588 10.3417 12.3254 11.1467 11.7319 11.7402C11.1384 12.3337 10.3334 12.6671 9.49409 12.6671ZM15.7111 4.43052C15.7111 4.65636 15.6441 4.87712 15.5185 5.06484C15.393 5.25256 15.2145 5.3988 15.0058 5.48503C14.7971 5.57127 14.5674 5.59362 14.346 5.54925C14.1246 5.50489 13.9213 5.39581 13.7619 5.23583C13.6025 5.07584 13.4941 4.87215 13.4506 4.65055C13.407 4.42895 13.4302 4.19941 13.5172 3.991C13.6042 3.78259 13.7511 3.60469 13.9393 3.47982C14.1275 3.35495 14.3485 3.28873 14.5743 3.28956C14.8762 3.29066 15.1653 3.41136 15.3784 3.62521C15.5915 3.83906 15.7111 4.12864 15.7111 4.43052Z" fill="#E5E5E5"/>
                                    </svg>
                                </Link>
                            </IconItem>
                        </IconList>
                        <Copyright>
                            ©︎2020 Praise Coffee
                        </Copyright>
                    </OutContents>
                </FooterInner>
            </Container>
        </GlobalFooter>
    )
}

export default Footer

const GlobalFooter = styled.footer`
    background-color: #333;
    * {
        color: #e5e5e5;
    }
    a:hover {
        opacity: .5;
        color: inherit;
    }
`

const FooterInner = styled.div`
    padding: 6rem 0 10rem;
    display: flex;
    justify-content: space-between;
    ${responsive.md} {
        padding: 5rem 0 5rem;
        display: block;
    }
`

const InContents = styled.div`
    display: flex;
    ${responsive.md} {
        margin-bottom: 3rem;
        padding-bottom: 3rem;
        position: relative;
        &::after {
            display: block;
            content: "";
            width: 20px;
            height: 1px;
            background-color: #e5e5e5;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
`

const FooterLogo = styled.p`
    width: 78px;
    margin-right: 4rem;
    a {
        display: block;
    }
    ${responsive.md} {
        display: none;
    }
`

const OutContents = styled.div``

const IconList = styled.ul`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2.5rem;
    ${responsive.md} {
        justify-content: flex-start;
        margin-bottom: 2rem;
    }
`

const IconItem = styled.li`
    a {
        display: block;
        width: auto;
        height: 19px;
    }
    &:not(:last-child) {
        margin-right: 2rem;
    }
    ${responsive.md} {
        &:not(:last-child) {
            margin-right: 1.6rem;
        }
    }
`

const Copyright = styled.p`
    font-size: 1.2rem;
    ${responsive.md} {
    }
`