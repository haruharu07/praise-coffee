import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import ogp_image from '@images/default-ogp.png'

function SEO({ description, lang, meta, keywords, title, image }) {

    return (
        <StaticQuery
        query={detailsQuery}
        render={data => {
            const metaDescription = description || data.site.siteMetadata.description
            const defaultImage = `${data.site.siteMetadata.siteUrl}${ogp_image}`
            const defaultTitle = "Praise Coffee | 美味しいコーヒーと共に、人生に豊かな時間を。"
            return (
            <Helmet
                htmlAttributes={{
                lang,
                }}
                defaultTitle = {defaultTitle}
                title={title}
                titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title || defaultTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: image || defaultImage,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:creator`,
                    content: data.site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title || defaultTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                ]
                .concat(
                    keywords.length > 0
                    ? {
                        name: `keywords`,
                        content: keywords.join(`, `),
                        }
                    : []
                )
                .concat(meta)}
                link={[
                {
                    href: `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap`,
                    rel: `stylesheet`,
                },
                ]}
            />
            )
        }}
        />
    )
    }

    SEO.defaultProps = {
    lang: `ja`,
    meta: [],
    keywords: [],
    title: null,
    }

    SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    }

export default SEO

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                siteUrl
            }
        }
    }
`
