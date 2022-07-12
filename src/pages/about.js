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
        <div className={layoutStlyes.text}>
          <h1>Hello.</h1>
          <p>My name is Charlie.</p>
        </div>
      </div>
      <br/>
      <div className={layoutStlyes.content}>
        <p>
          I studied Computer Science at Oregon State University and 
          I am most interested in Full Stack Web Development and Mobile Development.
          <br />
          <br />
          I love Software Engineering because there are endless learning opportunities. 
          It's amazing to be able to learn a new
          technology and apply that knowledge to create a unique
          application. I also really enjoy the colloborative nature of working on 
          a software development team.
          <br />
          <br />
          Take a look at some of my projects, my github page and my
          blog posts. Also, connect with me on LinkedIn or reach out if you think I would be a good 
          fit for your team. Thank you for visiting my website!
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
