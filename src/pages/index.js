import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import styles from "../styles/home.module.css"
import Img from "gatsby-image"
export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3> Develop & Deploy</h3>
          <p> UX Desgner & web developper based in Manchester</p>
          <Link className={styles.btn} to="/projects">
            My portfolio projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
