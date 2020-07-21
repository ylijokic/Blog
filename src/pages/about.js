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
        I am a Computer Science student at Oregon State University and I am
        interested in Full Stack Web Development and Data Analytics.
        <br />
        <br />
        My academic background is related to the environmental field, where I
        initially became interested in programming while learning about
        Geographic Information Systems (GIS). This ultimately led me to pursue a
        second Bachelor's degree in Computer Science.
        <br />
        <br />I love Computer Science because it is a field of study that has
        endless learning opportunities. It's amazing to be able to learn new
        technologies and apply my personal interests to be able to create unique
        applications. I am also inspired to learn about how big data analytics
        can help to drive innovation. Take a look at some of my projects and
        blog posts and reach out if you think I would be a good fit for your
        team. Thank you for visiting my website!
      </p>
    </Layout>
  )
}

export default AboutPage
