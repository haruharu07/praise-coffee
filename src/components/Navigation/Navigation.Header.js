import React from "react"
import { Link } from 'gatsby'
import responsive from "@styles/responsive"

import styled from 'styled-components'

const MobileNavItem = ({ navName, navLink, path }) => {
    return (
        <MobileNavLink className={navLink === path && "active"}>
            <Link to={ navLink }>
                {navName}
            </Link>
        </MobileNavLink>
    )
}

const NavigationHeader = ({ location }) => {

    const path = location.pathname

    function activate() {
        document.querySelector(".menu-button").classList.toggle("open")
        document.querySelector(".mobile-nav").classList.toggle("show")
        document.body.classList.toggle("noscroll")

        if(document.body.classList.contains('noscroll')){
            bodyScrollPrevent(true)
        }
    }

    function bodyScrollPrevent(flag, modal) {

	let scrollPosition;
	const body = document.getElementsByTagName('body')[0];
	//iOS(iPad含む)の判定
	const ua = window.navigator.userAgent.toLowerCase();
	const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
	//スクロールバーの幅
	const scrollBarWidth = window.innerWidth - document.body.clientWidth;

	if (flag) {
		body.style.paddingRight = scrollBarWidth + 'px';
		//iOSの場合はposition:fixedの処理
		if (isiOS) {
			scrollPosition = -window.pageYOffset;
			body.style.position = 'fixed';
			body.style.width = '100%';
			body.style.top = scrollPosition + 'px';
		//それ以外はoverflow:hiddenでシンプルな処理
		}
	} else if (!flag) {//elseでもOK。わかりやすく!flagとしているだけ
		//非表示にする際にモーダルがtransitionをしている場合、transitionが終わってからスタイルをリセットする
		addEventListenerOnce(modal, 'transitionend', function () {
			body.style.paddingRight = '';
			if (isiOS) {
				scrollPosition = parseInt(body.style.top.replace(/[^0-9]/g, ''));
				body.style.position = '';
				body.style.width = '';
				body.style.top = '';
				window.scrollTo(0, scrollPosition);
			}
		});
	}

	//transitionendイベントを一回だけ呼び出すための関数（これをやらないと二回目以降のモーダル処理に影響がある）
	function addEventListenerOnce(node, event, callback) {
		const handler = function (e) {
			callback.call(this, e);
			node.removeEventListener(event, handler);
		};
		node.addEventListener(event, handler);
	}

}

    return (
        <>
        <MenuBtn className="menu-button" onClick={activate}></MenuBtn>
        <MobileNav className="mobile-nav" onClick={activate}>
            <MobileNavList>
                <MobileNavItem navName="ストーリー" navLink="/story" path={path} />
                <MobileNavItem navName="コーヒー豆" navLink="/beans" path={path} />
                <MobileNavItem navName="カフェのメニュー" navLink="/menu" path={path} />
                <MobileNavItem navName="農園について" navLink="/plantation" path={path} />
                <MobileNavItem navName="お店について" navLink="/shop-info" path={path} />
                <MobileNavItem navName="TOPへもどる" navLink="/" path={path} />
            </MobileNavList>
        </MobileNav>
        </>
    )
}

export default NavigationHeader

const MenuBtn = styled.div`
    display: block;
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    position: relative;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    position: relative;
    z-index: 100;
    ${responsive.lg} {
        display: block;
    }
    &::before {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.base};
        position: absolute;
        top: 5px;
        left: 0;
        border-radius: 4px;
        transition: all 0.2s;
    }
    &::after {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.base};
        position: absolute;
        bottom: 5px;
        left: 0;
        border-radius: 4px;
        transition: all 0.2s;
    }
`

const MobileNav = styled.nav`
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background};
    padding: 7vh 0 4vh;
    ${responsive.lg} {
        padding-top: 10vh 0 4vh;
    }
    ${responsive.sm} {
        padding-top: 6vh 0 2vh;
    }
`

const MobileNavList = styled.ul`
    width: 28vw;
    height: 100%;
    margin: 0 12rem 0 auto;
    .active {
        color: ${props => props.theme.colors.base};
    }
    ${responsive.lg} {
        width: 100vw;
        margin: auto;
    }
`

const MobileNavLink = styled.li`
    color: rgba(0,0,0,0.5);
    position: relative;
    &:last-child::before {
        display: none;
        content: "";
        width: 220px;
        height: 1px;
        background-color:rgba(0,0,0,0.25);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    a {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 2rem 0;
        opacity: 0;
        font-size: 2.6rem;
        transform: translateX(30px);
    }
    a:hover {
        color: #111;
    }
    ${responsive.lg} {
        &:last-child::before {
            display: block;
        }
        a {
            padding: 2.4rem 0;
            font-size: 2.2rem;
            justify-content: center;
            transform: translateX(0);
        }
    }
    ${responsive.sm} {
        &:last-child::before {
            width: 150px;
        }
        a {
            padding: 2rem 0;
            font-size: 1.6rem;
        }
    }
`