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
          <a
            href="https://www.linkedin.com/in/charles-ylijoki/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/ylijokic" target="_blank">
            <FaGithubSquare size={30} />
          </a>
        </div>
        <p>Created by {data.site.siteMetadata.author}, © 2019</p>
      </div>
    </footer>
  )
}

export default Footer
