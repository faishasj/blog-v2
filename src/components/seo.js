/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, slug, title, thumbnail }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const thumbnailSrc = thumbnail && thumbnail.childImageSharp.sizes.src;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      {...(title ? 
        {
          titleTemplate: `%s | ${site.siteMetadata.title}`,
          title,
        } : 
        {
          title: site.siteMetadata.title,
        }
      )}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl + slug,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ].concat(
        thumbnail ?
        [
          { 
            name: `image`,
            content: site.siteMetadata.siteUrl + thumbnailSrc,
          },
          {
            property: `og:image`,
            content: site.siteMetadata.siteUrl + thumbnailSrc,
          },
          {
            name: `twitter:image`,
            content: site.siteMetadata.siteUrl + thumbnailSrc,
          },
        ] : []
      )
      .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  slug: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  slug: PropTypes.string,
}

export default SEO
