import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import headerStyles from "../components/header.module.scss"
import { FaBackward } from "react-icons/fa"
import Layout from "../components/layout"

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
      <p>
        <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/blog"
        >
        <FaBackward size={15}/>
        {" "} Back to Blog{" "}
        </Link>
      </p>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Blog
