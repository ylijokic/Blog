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
          I am a Computer Science student at Oregon State University and I am
          interested in Full Stack Web Development, Mobile Development, and Data Science.
          <br />
          <br />
          I love Computer Science because it is a field of study that has
          endless learning opportunities. It's amazing to be able to learn new
          technologies and apply my personal interests to create unique
          applications. I am also inspired to learn how big data and cloud services
          can help drive innovation. 
          <br />
          <br />
          Take a look at some of my projects, my github page and my
          blog posts. Connect with me on LinkedIn or reach out if you think I would be a good 
          fit for your team. Thank you for visiting my website!
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
