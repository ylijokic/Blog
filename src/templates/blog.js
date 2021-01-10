import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import headerStyles from "../components/header.module.scss"
import layoutStlyes from "../components/layout.module.scss"
import { FaBackward } from "react-icons/fa"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <div className={layoutStlyes.content}>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <p>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/blog"
        >
          <FaBackward size={15} /> Back to Blog{" "}
        </Link>
      </p>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      </div>
    </Layout>
  )
}

export default Blog
