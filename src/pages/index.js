import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import { rhythm, scale } from "../utils/typography"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle} description={data.site.siteMetadata.description}>
      <SEO/>
      <Bio />
      <h1 className="postsHeading">Recent posts</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article className="postPreviewArticle" key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description,
                }}
              />
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              {node.frontmatter.thumbnail && (
              <Img
                className={node.frontmatter.thumbnail_invertable ? "postPreviewImg invertable" : "postPreviewImg"}
                style={{maxWidth: 400, margin: "0 auto"}}
                fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              />
              )}
              <div className="postPreviewExcerpt"
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
            </section>
            <Link to={node.fields.slug}>Read more →</Link>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            thumbnail_invertable
          }
        }
      }
    }
  }
`
