import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Slider from 'react-slick'
import GatsbyImage from 'gatsby-image'

import responsive from '@styles/responsive'
import customSlick from '@styles/custom-slick'


import Container from '@components/Container'
import Headings from '@components/Headings'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "#111" }}
            onClick={onClick}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#E5E5E5" />
            </svg>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "#111" }}
            onClick={onClick}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20L13.41 18.59L7.83 13L20 13L20 11L7.83 11L13.41 5.41L12 4L4 12L12 20Z" fill="#E5E5E5" />
            </svg>
        </div>
    );
}


const Gallery = ({ insta }) => {

    const nodeURL = 'https://www.instagram.com/p'

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '-8%',
        // slidesToShow: 5.5,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    centerPadding: '20%',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    centerPadding: '20%',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Section>
            <Container>
                <Headings.h2 className="heading">
                    <svg width="212" height="82" viewBox="0 0 212 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.93506" y="26.8748" width="204" height="50" transform="rotate(-6.04184 1.93506 26.8748)" fill="#111"/>
                        <path d="M23.6866 47.3069L21.3715 47.5519L21.3038 49.8759L23.6188 49.6309L23.6866 47.3069ZM29.6571 48.9918L29.9855 52.0945L27.1215 52.3976L27 57.4062L23.4439 57.7826L23.5653 52.774L21.2503 53.019L21.1288 58.0276L17.5965 58.4015L17.7419 53.3904L15.2597 53.6531L14.9313 50.5504L17.7953 50.2473L17.8392 47.9258L15.4048 48.1834L15.079 45.1046L17.9191 44.804L18.0308 40.1585L21.5392 39.7871L21.4275 44.4327L23.7426 44.1877L23.8781 39.5396L27.4104 39.1657L27.2987 43.8113L29.7331 43.5536L30.059 46.6324L27.2427 46.9305L27.175 49.2545L29.6571 48.9918ZM37.1076 46.4897L38.659 46.3255C40.3774 46.1436 41.1574 45.3049 40.9991 43.8092C40.8408 42.3136 39.9024 41.6567 38.184 41.8386L36.6327 42.0028L37.1076 46.4897ZM38.1383 56.2273L33.4604 56.7224L31.5557 38.727L39.0021 37.9388C41.0228 37.7249 42.6218 38.0866 43.799 39.0239C44.9921 39.9596 45.6897 41.382 45.8918 43.2914C46.0939 45.2007 45.7095 46.7377 44.7387 47.9023C43.7838 49.0653 42.296 49.7537 40.2753 49.9676L37.5067 50.2606L38.1383 56.2273ZM47.934 42.8097L52.2539 42.3525L52.4661 44.3573C52.8501 43.5766 53.356 42.9599 53.9838 42.5073C54.61 42.0388 55.3686 41.7574 56.2596 41.6631C56.371 41.6513 56.4903 41.6386 56.6176 41.6252C56.7608 41.61 56.9216 41.6091 57.1 41.6224L57.537 45.7513C56.9339 45.5255 56.2982 45.448 55.6299 45.5188C54.6275 45.6249 53.9038 46.0072 53.4586 46.6657C53.0277 47.3066 52.8728 48.1998 52.9941 49.3454L53.5498 54.5961L49.2299 55.0533L47.934 42.8097ZM63.8452 47.2798C63.8873 47.6776 63.9985 48.0439 64.1788 48.3788C64.3573 48.6978 64.5794 48.972 64.845 49.2013C65.1266 49.4289 65.442 49.5966 65.7913 49.7045C66.1565 49.8106 66.5379 49.8427 66.9357 49.8006C67.3176 49.7601 67.668 49.6506 67.987 49.4721C68.3219 49.2918 68.5952 49.0618 68.8069 48.7819C69.0345 48.5004 69.2023 48.185 69.3101 47.8357C69.4339 47.4847 69.4755 47.1183 69.4351 46.7365C69.3947 46.3546 69.2772 46.005 69.0828 45.6877C68.9025 45.3528 68.6716 45.0716 68.3901 44.8439C68.1245 44.6146 67.8091 44.4469 67.4439 44.3407C67.0946 44.2329 66.729 44.1992 66.3471 44.2396C65.9494 44.2817 65.583 44.3929 65.2481 44.5731C64.9292 44.7517 64.6559 44.9818 64.4282 45.2633C64.2165 45.5431 64.0567 45.8577 63.9489 46.207C63.8394 46.5403 63.8048 46.898 63.8452 47.2798ZM68.6427 40.6179L72.9864 40.1581L74.2823 52.4017L69.9386 52.8615L69.7946 51.5011C68.9947 52.7603 67.8071 53.4732 66.2319 53.64C65.3409 53.7343 64.5046 53.6619 63.7231 53.4228C62.94 53.1678 62.2388 52.7755 61.6196 52.2457C61.0004 51.7159 60.4895 51.0701 60.0871 50.3082C59.7006 49.5447 59.4577 48.6935 59.3583 47.7547C59.2657 46.8796 59.3293 46.0363 59.5491 45.2246C59.7672 44.3971 60.1156 43.6603 60.5942 43.0143C61.0729 42.3684 61.6684 41.8387 62.3809 41.4254C63.0917 40.9962 63.9005 40.7337 64.8075 40.6377C66.3349 40.476 67.6563 40.8751 68.7715 41.8351L68.6427 40.6179ZM80.246 39.3898L81.5419 51.6334L77.222 52.0906L75.9261 39.847L80.246 39.3898ZM75.1421 35.1756C75.1067 34.8414 75.1375 34.5244 75.2345 34.2245C75.3298 33.9088 75.477 33.6277 75.6762 33.3814C75.8754 33.135 76.1114 32.9331 76.3844 32.7755C76.6732 32.6162 76.9847 32.5189 77.3188 32.4835C77.653 32.4481 77.97 32.4789 78.2698 32.5759C78.5856 32.6712 78.8667 32.8184 79.113 33.0176C79.3593 33.2168 79.5621 33.4608 79.7214 33.7496C79.879 34.0226 79.9755 34.3261 80.0109 34.6602C80.0463 34.9944 80.0163 35.3193 79.921 35.6351C79.824 35.935 79.6759 36.2081 79.4768 36.4544C79.2776 36.7007 79.0336 36.9036 78.7447 37.0628C78.4718 37.2204 78.1683 37.3169 77.8341 37.3523C77.5 37.3877 77.1751 37.3577 76.8593 37.2624C76.5594 37.1654 76.2863 37.0174 76.04 36.8182C75.7936 36.619 75.5917 36.3829 75.4341 36.11C75.2748 35.8212 75.1774 35.5097 75.1421 35.1756ZM91.6461 41.3688C90.8068 41.0393 90.0052 40.915 89.2415 40.9959C88.8437 41.038 88.526 41.152 88.2882 41.3381C88.0664 41.5225 87.9698 41.7499 87.9984 42.0204C88.0136 42.1636 88.0421 42.2812 88.0841 42.3733C88.1402 42.4478 88.2362 42.5181 88.3719 42.5842C88.5235 42.6486 88.73 42.6992 88.9913 42.7359C89.2685 42.7709 89.627 42.8134 90.0667 42.8634C91.2853 42.9757 92.2218 43.311 92.8761 43.8693C93.5288 44.4116 93.9057 45.1601 94.0068 46.1147C94.0826 46.8307 94.0076 47.4903 93.7818 48.0934C93.556 48.6965 93.2096 49.2239 92.7425 49.6756C92.2738 50.1113 91.6924 50.4705 90.9983 50.7531C90.3059 51.0517 89.53 51.2464 88.6708 51.3374C87.0161 51.5125 85.3355 51.2157 83.6291 50.4471L84.881 47.2254C86.1778 47.9248 87.3672 48.2172 88.4491 48.1027C88.8469 48.0606 89.1638 47.9386 89.3999 47.7366C89.6359 47.5347 89.7397 47.2984 89.711 47.0279C89.6942 46.8688 89.6568 46.7441 89.599 46.6537C89.5554 46.5456 89.4657 46.4586 89.33 46.3925C89.1926 46.3105 88.9933 46.2512 88.732 46.2145C88.4849 46.1602 88.1582 46.1143 87.752 46.0769C86.3869 45.9478 85.406 45.6494 84.8095 45.1816C84.2271 44.6962 83.8863 43.9841 83.7869 43.0454C83.7145 42.3612 83.777 41.7351 83.9743 41.1672C84.1699 40.5834 84.4862 40.0753 84.9231 39.6429C85.36 39.2105 85.9017 38.8555 86.5481 38.5779C87.2103 38.2987 87.9552 38.1152 88.7826 38.0277C90.135 37.8845 91.4755 38.0081 92.8039 38.3985L91.6461 41.3688ZM104.751 41.1885C104.544 40.599 104.198 40.1449 103.714 39.8261C103.229 39.5073 102.669 39.3816 102.033 39.4489C101.364 39.5197 100.834 39.7528 100.441 40.1483C100.065 40.5421 99.8545 41.0632 99.8105 41.7114L104.751 41.1885ZM99.9564 44.23C100.153 46.0916 101.127 46.9298 102.877 46.7446C103.816 46.6452 104.484 46.1884 104.88 45.3741L109.057 44.9321C108.51 47.8217 106.55 49.445 103.177 49.802C102.143 49.9115 101.18 49.8605 100.289 49.6492C99.3957 49.4219 98.6087 49.0547 97.9276 48.5476C97.2623 48.0388 96.7205 47.4043 96.3022 46.6441C95.8838 45.8839 95.6225 45.0105 95.518 44.024C95.4103 43.0057 95.4725 42.074 95.7049 41.2289C95.9355 40.3678 96.3149 39.6197 96.843 38.9846C97.3711 38.3495 98.0328 37.837 98.8282 37.4471C99.6378 37.0396 100.568 36.7803 101.618 36.6692C102.652 36.5597 103.6 36.6203 104.461 36.8509C105.32 37.0657 106.067 37.4371 106.702 37.9652C107.338 38.4933 107.852 39.1709 108.245 39.9981C108.637 40.8094 108.889 41.7481 109.002 42.8141L109.05 43.2676L99.9564 44.23ZM124.187 35.0044C122.965 33.7983 121.559 33.2794 119.968 33.4479C119.268 33.5219 118.629 33.7183 118.051 34.0369C117.489 34.3537 117.017 34.7577 116.635 35.2487C116.251 35.7237 115.963 36.2771 115.773 36.9086C115.598 37.5385 115.548 38.2035 115.622 38.9036C115.698 39.6196 115.887 40.2673 116.189 40.8466C116.508 41.4243 116.906 41.9132 117.382 42.3132C117.875 42.7116 118.429 43.0069 119.045 43.1991C119.661 43.3914 120.311 43.4513 120.995 43.3789C122.49 43.2206 123.767 42.4419 124.826 41.0427L125.412 46.5797L124.953 46.7973C124.263 47.1277 123.615 47.3814 123.006 47.5585C122.399 47.7514 121.793 47.8799 121.188 47.9439C119.947 48.0753 118.729 47.9709 117.535 47.6307C116.355 47.2729 115.283 46.7187 114.318 45.968C113.368 45.1998 112.569 44.2627 111.921 43.1567C111.271 42.0349 110.873 40.7818 110.727 39.3976C110.58 38.0133 110.701 36.7214 111.089 35.5219C111.491 34.3048 112.078 33.2371 112.849 32.3188C113.635 31.3829 114.577 30.6236 115.673 30.0409C116.768 29.4423 117.944 29.0765 119.201 28.9435C119.917 28.8677 120.626 28.8732 121.327 28.9599C122.042 29.029 122.798 29.1822 123.596 29.4196L124.187 35.0044ZM131.436 40.1018C131.479 40.5155 131.591 40.8897 131.772 41.2246C131.966 41.5419 132.196 41.8152 132.462 42.0445C132.743 42.2722 133.059 42.4399 133.408 42.5477C133.773 42.6539 134.147 42.6868 134.529 42.6463C134.91 42.6059 135.261 42.4964 135.58 42.3179C135.915 42.1376 136.188 41.9076 136.4 41.6277C136.627 41.3462 136.795 41.0308 136.903 40.6815C137.025 40.3146 137.065 39.9323 137.023 39.5345C136.983 39.1527 136.865 38.8031 136.671 38.4858C136.49 38.1509 136.259 37.8696 135.978 37.642C135.712 37.4127 135.397 37.2449 135.032 37.1388C134.682 37.031 134.317 36.9973 133.935 37.0377C133.553 37.0781 133.195 37.1884 132.86 37.3687C132.541 37.5472 132.268 37.7773 132.04 38.0588C131.828 38.3386 131.66 38.6541 131.537 39.005C131.429 39.3543 131.395 39.7199 131.436 40.1018ZM126.872 40.5365C126.776 39.6296 126.87 38.7669 127.153 37.9485C127.435 37.1143 127.872 36.3762 128.463 35.7343C129.053 35.0766 129.776 34.5335 130.632 34.105C131.504 33.6749 132.472 33.4034 133.538 33.2906C134.589 33.1795 135.577 33.2438 136.503 33.4836C137.444 33.7058 138.271 34.0768 138.986 34.5965C139.715 35.0985 140.305 35.7359 140.757 36.5087C141.207 37.2655 141.484 38.1292 141.587 39.0998C141.689 40.0703 141.593 40.9816 141.297 41.8335C141.015 42.6678 140.579 43.4138 139.989 44.0715C139.397 44.7134 138.657 45.2423 137.768 45.6582C136.894 46.0724 135.925 46.3359 134.859 46.4487C133.809 46.5599 132.821 46.5035 131.896 46.2796C130.972 46.0557 130.152 45.6839 129.437 45.1642C128.739 44.6429 128.163 43.9958 127.711 43.2231C127.258 42.4344 126.978 41.5389 126.872 40.5365ZM156.908 34.9199L157.823 43.5596L153.503 44.0168L152.588 35.3771L148.483 35.8116L149.398 44.4513L145.078 44.9085L144.164 36.2688L142.612 36.433L142.231 32.8291L143.782 32.6649L143.542 30.3976C143.367 28.7428 143.871 27.2736 145.055 25.9899C146.213 24.7732 147.627 24.0765 149.298 23.8996C150.857 23.7346 152.291 24.0575 153.6 24.8682C154.522 23.9984 155.603 23.4978 156.844 23.3665C157.162 23.3328 157.477 23.3397 157.787 23.3873C158.114 23.4331 158.444 23.5108 158.777 23.6204L159.177 27.3913C158.573 27.1655 158.057 27.0754 157.627 27.1208C157.055 27.1815 156.648 27.4417 156.407 27.9017C156.273 28.1572 156.244 28.6429 156.32 29.3589L156.527 31.316L159.558 30.9952L159.939 34.599L156.908 34.9199ZM151.967 29.5059C151.905 28.9172 151.651 28.4211 151.206 28.0177C150.777 27.6126 150.268 27.4412 149.68 27.5035C149.091 27.5658 148.621 27.8408 148.271 28.3284C147.938 28.8302 147.801 29.3676 147.862 29.9404L148.102 32.2077L152.207 31.7732L151.967 29.5059ZM170.85 34.1923C170.643 33.6029 170.297 33.1487 169.813 32.8299C169.329 32.5111 168.769 32.3854 168.132 32.4528C167.464 32.5235 166.934 32.7566 166.541 33.1522C166.164 33.546 165.954 34.067 165.91 34.7153L170.85 34.1923ZM166.056 37.2339C166.253 39.0955 167.227 39.9337 168.977 39.7484C169.916 39.6491 170.583 39.1922 170.98 38.378L175.156 37.9359C174.609 40.8255 172.649 42.4489 169.276 42.8059C168.242 42.9153 167.279 42.8644 166.388 42.653C165.495 42.4257 164.708 42.0585 164.027 41.5514C163.362 41.0426 162.82 40.4081 162.402 39.6479C161.983 38.8877 161.722 38.0144 161.618 37.0279C161.51 36.0096 161.572 35.0779 161.804 34.2327C162.035 33.3716 162.414 32.6236 162.943 31.9884C163.471 31.3533 164.132 30.8408 164.928 30.451C165.737 30.0435 166.667 29.7842 167.717 29.673C168.752 29.5635 169.699 29.6241 170.56 29.8548C171.42 30.0695 172.167 30.4409 172.802 30.969C173.437 31.4971 173.951 32.1748 174.345 33.002C174.736 33.8133 174.988 34.7519 175.101 35.818L175.149 36.2714L166.056 37.2339ZM186.303 32.5568C186.096 31.9673 185.75 31.5132 185.266 31.1944C184.782 30.8756 184.221 30.7499 183.585 30.8172C182.917 30.888 182.386 31.1211 181.994 31.5166C181.617 31.9104 181.407 32.4315 181.363 33.0797L186.303 32.5568ZM181.509 35.5983C181.706 37.4599 182.679 38.2981 184.43 38.1129C185.368 38.0135 186.036 37.5567 186.432 36.7424L190.609 36.3004C190.062 39.19 188.102 40.8133 184.729 41.1703C183.695 41.2798 182.732 41.2288 181.841 41.0175C180.948 40.7902 180.161 40.423 179.48 39.9159C178.815 39.407 178.273 38.7725 177.854 38.0124C177.436 37.2522 177.175 36.3788 177.07 35.3923C176.963 34.374 177.025 33.4423 177.257 32.5971C177.488 31.7361 177.867 30.988 178.395 30.3529C178.923 29.7178 179.585 29.2053 180.38 28.8154C181.19 28.4079 182.12 28.1486 183.17 28.0375C184.204 27.928 185.152 27.9886 186.013 28.2192C186.872 28.434 187.62 28.8054 188.255 29.3335C188.89 29.8616 189.404 30.5392 189.797 31.3664C190.189 32.1777 190.441 33.1164 190.554 34.1824L190.602 34.6359L181.509 35.5983Z" fill="#E5E5E5"/>
                    </svg>
                </Headings.h2>
            </Container>
            <Slider {...settings}>
                {insta.map(({ node }) => {
                    return (
                        <a href={`${nodeURL}/${node.id}`} target="_blank" rel="noopener noreferrer" className="card-link" >
                            <Card>
                                <InstaCard className="insta-card">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                            <path d="M9.49418 1.70729C12.0343 1.70729 12.3383 1.71978 13.3377 1.76558C14.2662 1.80722 14.7659 1.96546 15.1032 2.09871C15.5151 2.2504 15.8879 2.49226 16.1942 2.80661C16.5086 3.11296 16.7504 3.48572 16.9021 3.89761C17.0271 4.23074 17.1853 4.73043 17.2353 5.66319C17.2769 6.66258 17.2852 6.96239 17.2852 9.49417C17.2852 12.0259 17.2769 12.3383 17.2311 13.3376C17.1895 14.2662 17.0229 14.7659 16.898 15.1032C16.74 15.513 16.498 15.8852 16.1874 16.1958C15.8769 16.5063 15.5047 16.7484 15.0949 16.9063C14.7618 17.0312 14.2621 17.1894 13.3293 17.2311C12.3299 17.2727 12.0301 17.2894 9.49001 17.2894C6.9499 17.2894 6.65842 17.2769 5.65903 17.2311C4.7346 17.1894 4.23074 17.0354 3.89345 16.9063C3.48156 16.7546 3.1088 16.5127 2.80245 16.1984C2.48758 15.8908 2.24568 15.5166 2.09455 15.1032C1.9613 14.7701 1.80306 14.2704 1.76142 13.3376C1.71978 12.3383 1.70729 12.0384 1.70729 9.49833C1.70729 6.95823 1.71978 6.66674 1.76558 5.66735C1.80722 4.74292 1.96546 4.23906 2.09871 3.90177C2.2504 3.48988 2.49227 3.11712 2.80661 2.81077C3.11296 2.49643 3.48572 2.25456 3.89761 2.10288C4.23074 1.96962 4.73043 1.81139 5.66319 1.76975C6.66258 1.72811 6.9624 1.71561 9.49418 1.71561V1.70729ZM9.49418 0.00832822C6.91243 0.00832822 6.59595 0.0208205 5.57991 0.0666258C4.56387 0.112431 3.88512 0.266503 3.28132 0.499693C2.64759 0.738068 2.07348 1.11181 1.59902 1.59485C1.11447 2.0689 0.739288 2.64304 0.499693 3.27715C0.266503 3.88095 0.104103 4.56803 0.0582976 5.58407C0.0124923 6.60011 0 6.92491 0 9.49417C0 12.0634 0.0124923 12.409 0.0582976 13.4168C0.104103 14.4245 0.266503 15.124 0.499693 15.7237C0.738069 16.3574 1.11181 16.9315 1.59485 17.406C2.06931 17.889 2.64342 18.2628 3.27716 18.5011C3.88095 18.7343 4.56803 18.8967 5.58407 18.9425C6.60012 18.9883 6.92492 18.9967 9.49834 18.9967C12.0718 18.9967 12.4132 18.9842 13.4209 18.9384C14.4286 18.8926 15.1282 18.7302 15.7279 18.4928C16.3586 18.2486 16.9314 17.8755 17.4097 17.3972C17.888 16.9189 18.2611 16.3461 18.5053 15.7154C18.7385 15.1116 18.9009 14.4245 18.9467 13.4084C18.9925 12.3924 19.0008 12.0759 19.0008 9.49417C19.0008 6.91242 18.9884 6.58762 18.9425 5.57991C18.8967 4.57219 18.7343 3.87262 18.497 3.26883C18.2588 2.63845 17.8865 2.06731 17.406 1.59485C16.9315 1.11181 16.3574 0.738068 15.7237 0.499693C15.1199 0.266503 14.4328 0.104103 13.4168 0.0582975C12.4007 0.0124923 12.0843 0 9.5025 0" fill="#E5E5E5" />
                                            <path d="M9.49409 4.62207C8.52867 4.6229 7.58519 4.91004 6.78299 5.44716C5.98079 5.98429 5.35592 6.74728 4.98742 7.6396C4.61893 8.53192 4.52336 9.51349 4.71282 10.4601C4.90227 11.4068 5.36824 12.276 6.05176 12.9577C6.73529 13.6395 7.60566 14.1033 8.55279 14.2903C9.49992 14.4773 10.4812 14.3792 11.3726 14.0085C12.264 13.6377 13.0254 13.0109 13.5604 12.2073C14.0955 11.4037 14.3802 10.4595 14.3786 9.49408C14.3764 8.20046 13.8607 6.96063 12.9448 6.04707C12.0289 5.13351 10.7877 4.62097 9.49409 4.62207ZM9.49409 12.6671C8.86816 12.6671 8.2563 12.4815 7.73586 12.1338C7.21543 11.786 6.80979 11.2918 6.57026 10.7135C6.33073 10.1352 6.26806 9.4989 6.39017 8.885C6.51228 8.27111 6.8137 7.70721 7.25629 7.26461C7.69888 6.82202 8.26278 6.52061 8.87668 6.3985C9.49058 6.27638 10.1269 6.33906 10.7052 6.57859C11.2835 6.81812 11.7777 7.22375 12.1255 7.74418C12.4732 8.26462 12.6588 8.87649 12.6588 9.50241C12.6588 10.3417 12.3254 11.1467 11.7319 11.7402C11.1384 12.3337 10.3334 12.6671 9.49409 12.6671ZM15.7111 4.43052C15.7111 4.65636 15.6441 4.87712 15.5185 5.06484C15.393 5.25256 15.2145 5.3988 15.0058 5.48503C14.7971 5.57127 14.5674 5.59362 14.346 5.54925C14.1246 5.50489 13.9213 5.39581 13.7619 5.23583C13.6025 5.07584 13.4941 4.87215 13.4506 4.65055C13.407 4.42895 13.4302 4.19941 13.5172 3.991C13.6042 3.78259 13.7511 3.60469 13.9393 3.47982C14.1275 3.35495 14.3485 3.28873 14.5743 3.28956C14.8762 3.29066 15.1653 3.41136 15.3784 3.62521C15.5915 3.83906 15.7111 4.12864 15.7111 4.43052Z" fill="#E5E5E5" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="19" height="19" fill="#555" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </InstaCard>
                                <GatsbyImage
                                    fluid={node.localFile.childImageSharp.fluid}
                                    alt="Photo from Instagram"
                                />
                            </Card>
                        </a>
                    )
                })}
            </Slider>
            <Container>
            <Social>
                <Link to="#">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M9.49418 1.70729C12.0343 1.70729 12.3383 1.71978 13.3377 1.76558C14.2662 1.80722 14.7659 1.96546 15.1032 2.09871C15.5151 2.2504 15.8879 2.49226 16.1942 2.80661C16.5086 3.11296 16.7504 3.48572 16.9021 3.89761C17.0271 4.23074 17.1853 4.73043 17.2353 5.66319C17.2769 6.66258 17.2852 6.96239 17.2852 9.49417C17.2852 12.0259 17.2769 12.3383 17.2311 13.3376C17.1895 14.2662 17.0229 14.7659 16.898 15.1032C16.74 15.513 16.498 15.8852 16.1874 16.1958C15.8769 16.5063 15.5047 16.7484 15.0949 16.9063C14.7618 17.0312 14.2621 17.1894 13.3293 17.2311C12.3299 17.2727 12.0301 17.2894 9.49001 17.2894C6.9499 17.2894 6.65842 17.2769 5.65903 17.2311C4.7346 17.1894 4.23074 17.0354 3.89345 16.9063C3.48156 16.7546 3.1088 16.5127 2.80245 16.1984C2.48758 15.8908 2.24568 15.5166 2.09455 15.1032C1.9613 14.7701 1.80306 14.2704 1.76142 13.3376C1.71978 12.3383 1.70729 12.0384 1.70729 9.49833C1.70729 6.95823 1.71978 6.66674 1.76558 5.66735C1.80722 4.74292 1.96546 4.23906 2.09871 3.90177C2.2504 3.48988 2.49227 3.11712 2.80661 2.81077C3.11296 2.49643 3.48572 2.25456 3.89761 2.10288C4.23074 1.96962 4.73043 1.81139 5.66319 1.76975C6.66258 1.72811 6.9624 1.71561 9.49418 1.71561V1.70729ZM9.49418 0.00832822C6.91243 0.00832822 6.59595 0.0208205 5.57991 0.0666258C4.56387 0.112431 3.88512 0.266503 3.28132 0.499693C2.64759 0.738068 2.07348 1.11181 1.59902 1.59485C1.11447 2.0689 0.739288 2.64304 0.499693 3.27715C0.266503 3.88095 0.104103 4.56803 0.0582976 5.58407C0.0124923 6.60011 0 6.92491 0 9.49417C0 12.0634 0.0124923 12.409 0.0582976 13.4168C0.104103 14.4245 0.266503 15.124 0.499693 15.7237C0.738069 16.3574 1.11181 16.9315 1.59485 17.406C2.06931 17.889 2.64342 18.2628 3.27716 18.5011C3.88095 18.7343 4.56803 18.8967 5.58407 18.9425C6.60012 18.9883 6.92492 18.9967 9.49834 18.9967C12.0718 18.9967 12.4132 18.9842 13.4209 18.9384C14.4286 18.8926 15.1282 18.7302 15.7279 18.4928C16.3586 18.2486 16.9314 17.8755 17.4097 17.3972C17.888 16.9189 18.2611 16.3461 18.5053 15.7154C18.7385 15.1116 18.9009 14.4245 18.9467 13.4084C18.9925 12.3924 19.0008 12.0759 19.0008 9.49417C19.0008 6.91242 18.9884 6.58762 18.9425 5.57991C18.8967 4.57219 18.7343 3.87262 18.497 3.26883C18.2588 2.63845 17.8865 2.06731 17.406 1.59485C16.9315 1.11181 16.3574 0.738068 15.7237 0.499693C15.1199 0.266503 14.4328 0.104103 13.4168 0.0582975C12.4007 0.0124923 12.0843 0 9.5025 0" fill="#555" />
                            <path d="M9.49409 4.62207C8.52867 4.6229 7.58519 4.91004 6.78299 5.44716C5.98079 5.98429 5.35592 6.74728 4.98742 7.6396C4.61893 8.53192 4.52336 9.51349 4.71282 10.4601C4.90227 11.4068 5.36824 12.276 6.05176 12.9577C6.73529 13.6395 7.60566 14.1033 8.55279 14.2903C9.49992 14.4773 10.4812 14.3792 11.3726 14.0085C12.264 13.6377 13.0254 13.0109 13.5604 12.2073C14.0955 11.4037 14.3802 10.4595 14.3786 9.49408C14.3764 8.20046 13.8607 6.96063 12.9448 6.04707C12.0289 5.13351 10.7877 4.62097 9.49409 4.62207ZM9.49409 12.6671C8.86816 12.6671 8.2563 12.4815 7.73586 12.1338C7.21543 11.786 6.80979 11.2918 6.57026 10.7135C6.33073 10.1352 6.26806 9.4989 6.39017 8.885C6.51228 8.27111 6.8137 7.70721 7.25629 7.26461C7.69888 6.82202 8.26278 6.52061 8.87668 6.3985C9.49058 6.27638 10.1269 6.33906 10.7052 6.57859C11.2835 6.81812 11.7777 7.22375 12.1255 7.74418C12.4732 8.26462 12.6588 8.87649 12.6588 9.50241C12.6588 10.3417 12.3254 11.1467 11.7319 11.7402C11.1384 12.3337 10.3334 12.6671 9.49409 12.6671ZM15.7111 4.43052C15.7111 4.65636 15.6441 4.87712 15.5185 5.06484C15.393 5.25256 15.2145 5.3988 15.0058 5.48503C14.7971 5.57127 14.5674 5.59362 14.346 5.54925C14.1246 5.50489 13.9213 5.39581 13.7619 5.23583C13.6025 5.07584 13.4941 4.87215 13.4506 4.65055C13.407 4.42895 13.4302 4.19941 13.5172 3.991C13.6042 3.78259 13.7511 3.60469 13.9393 3.47982C14.1275 3.35495 14.3485 3.28873 14.5743 3.28956C14.8762 3.29066 15.1653 3.41136 15.3784 3.62521C15.5915 3.83906 15.7111 4.12864 15.7111 4.43052Z" fill="#555" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="19" height="19" fill="#555" />
                            </clipPath>
                        </defs>
                    </svg>
                    Follow us on Instagram
                </Link>
            </Social>
            </Container>
        </Section>
    )

}

export default Gallery

const Section = styled.section`
    padding: 6rem 0 8rem;
    background-color: rgb(250 238 236);
    .heading {
        margin-bottom: 2rem;
    }
    ${responsive.lg} {
        padding: 5rem 0 5rem;
        .heading {
            padding-top: 5rem;
            position: relative;
            margin: 0;
            svg {
                position: absolute;
                top: -13px;
                left: 2px;
                z-index: 2;
            }
        }
    }
    ${responsive.lg} {
        padding: 4rem 0 5rem;
        .heading {
            svg {
                width: 178px;
                top: -7px;
            }
        }
    }
    ${customSlick}
`

const Card = styled.div`
    margin: 0 6%;
    height: 20vw;
    position: relative;
    &:hover .insta-card {
        display: flex;
    }
    & > div {
        height: 100%;
    }
    max-width: 600px;
    ${responsive.lg} {
        margin: 0 4%;
        height: 30vw;
    }
    ${responsive.sm} {
        margin: 0 2%;
        height: 54vw;
    }
`

const InstaCard = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    svg {
        width: 5rem;
        height: 5rem;
    }
`

const Social = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 4rem;
    font-size: 1.8rem;
    line-height: 1;
    a {
        display: flex;
    }
    svg {
        margin-right: 0.8rem;
        path {
            transition: all .5s;
        }
    }
    a:hover svg path {
        fill: ${(props) => props.theme.colors.highlight};
        transition: all .5s;
    }
    ${responsive.lg} {
        justify-content: center;
        margin-top: 2.5rem;
    }
`