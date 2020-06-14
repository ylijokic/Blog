import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title={"404"} />
      <h1>Page Not Found!</h1>
      <p>
        <Link to="/">Go to Home Page</Link>
      </p>
    </Layout>
  )
}

export default NotFound
