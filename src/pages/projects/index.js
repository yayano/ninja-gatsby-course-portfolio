import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import styles from "../../styles/projects.module.css"
import Img from "gatsby-image"
const Projects = ({ data }) => {
  console.log(data)
  const projects = data.projects.nodes
  const { contact } = data.contact.siteMetadata
  return (
    <Layout>
      <section className={styles.portfolio}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Desgner & web developper based in Manchester</p>
          <div className={styles.projects}>
            {" "}
            {projects.map(project => (
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
              >
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </Link>
            ))}
          </div>
          <p>Like what you see? email me at {contact} for a quote!</p>
        </div>
      </section>
    </Layout>
  )
}

export default Projects

//export projects page
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
