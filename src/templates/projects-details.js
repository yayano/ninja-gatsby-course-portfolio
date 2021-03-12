import React from "react"
import Img from "gatsby-image"
import styles from "../styles/projects-details.module.css"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ProjectsDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredimg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h2>{stack}</h2>
        <div className={styles.featured}>
          <Img fluid={featuredimg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default ProjectsDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredimg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
