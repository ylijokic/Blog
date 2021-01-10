import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import layoutStlyes from "../components/layout.module.scss"

const NotFound = () => {
  return (
    <Layout>
      <div className={layoutStlyes.content}>
        <Head title={"404"} />
        <h1>Page Not Found!</h1>
        <p>
          <Link to="/">Go to Home Page</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
