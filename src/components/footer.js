import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.icons}>
          <a href="https://www.linkedin.com/in/charles-ylijoki/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ylijokic">
            <FaGithubSquare />
          </a>
        </div>
        <p>Created by {data.site.siteMetadata.author}, © 2019</p>
      </div>
    </footer>
  )
}

export default Footer
