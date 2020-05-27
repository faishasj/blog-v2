import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { slug, previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        thumbnail={post.frontmatter.thumbnail}
        slug={slug || ''}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1 / 4),
            }}
          >
            {post.frontmatter.title}
          </h1>
          <div>{post.frontmatter.description}</div>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(2/3),
            }}
          >
            {post.frontmatter.date}
          </p>
          {post.frontmatter.thumbnail && (
          <Img 
            className={post.frontmatter.thumbnail_invertable ? "postThumbnail invertable" : "postThumbnail"}
            fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            style={{maxWidth: 500, margin: "0 auto"}}
          />
          )}
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} style={{marginTop: 20}}/>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        thumbnail_invertable
      }
    }
  }
`
