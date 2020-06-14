import React from "react"
import Layout from "../components/layout"
import layoutStlyes from "../components/layout.module.scss"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title={"About Me"} />
      <div className={layoutStlyes.picture_div}>
        <img src={`../../unnamed.jpg`} className={layoutStlyes.picture} />
        <h1>Hello</h1>
        <p>My name is Charlie.</p>
      </div>
      <p>
        I am a Computer Science student at Oregon State University.
        <br />
        <br />
        My background is related to the environmental field, where I initially
        became interested in programming while learning about Geographic
        Information Systems (GIS). This led me to pursue a second Bachelor's
        degree in Computer Science.
        <br />
        <br />
        My interests are focused on full stack development and I am currently
        looking for internship opportunities to expand on my technical skills.
      </p>
    </Layout>
  )
}

export default AboutPage
