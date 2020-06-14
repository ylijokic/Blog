import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import projectStyles from "./projects.module.scss"
import Head from "../components/head"

const Projects = () => {
  return (
    <Layout>
      <Head title={"My Projects"} />
      <div className={projectStyles.projects}>
        <div className={(projectStyles.project, projectStyles.project1)}>
          <h2>Foodie Finds:</h2>
          <h2> Recipe Search Web Application</h2>
          <h4>Javascript ~~ Node.js ~~ React.js ~~ Sass</h4>
          <p>
            This web application allows users to search for their favorite
            recipes! The user can filter recipes based on meal type or they can
            filter based on key words. We utilized the Spoonacular web api to
            make endpoint requests and retrieve the recipe data. The application
            is built using JavaScript, React.js Library, Node.js, and Sass. This
            project was part of a group effort during a
            <a href="https://www.chingu.io/"> Chingu</a> collaborative coding
            session. Have a look at the application and the code repository!
          </p>
          <div className={projectStyles.item}>
            <img src={`../../foodie.png`} alt="Project" srcset="" />
            <a
              href="https://hardcore-bassi-625fa0.netlify.com"
              className={projectStyles.btnLight}
            >
              <i class="fa fa-eye"></i> Project
            </a>
            <a
              href="https://github.com/chingu-voyages/v11-geckos-team-06"
              className={projectStyles.btnDark}
            >
              <i class="fa fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className={(projectStyles.project, projectStyles.project2)}>
          <h2>One Hit Wonder: </h2>
          <h2>Musician Matching Social Application</h2>
          <h4>Python ~~ Django ~~ JavaScript ~~ AWS ~~ Bootstrap</h4>
          <p>
            The OneHitWonder application is a Django based web-app that enables
            both Musicians looking for work and Venue owners looking for
            Musicians to connect with one another via skill level specific
            advertisement. Employers can post experience targeted advertisements
            to Musicians that match the employers desired criteria. All data
            interactions and storage of the web application is done using the
            AWS relational database.
          </p>
          <div className={projectStyles.item}>
            <img src={`../../one-hit-wonder.png`} alt=" " srcset="" />

            <a
              href="https://onehitwonder.rocks/"
              className={projectStyles.btnLight}
            >
              <i class="fa fa-eye"></i> View Project
            </a>
            <a
              href="https://github.com/ylijokic/CS361_Team21"
              className={projectStyles.btnDark}
            >
              <i class="fa fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className={(projectStyles.project, projectStyles.project3)}>
          <h2>Portland Park Finder</h2>
          <h4>Javascript ~~ MapBox API ~~ HTML ~~ CSS</h4>
          <p>
            This web application allows users to interact with GeoJSON data
            points associated with various public parks in Portland, OR. There
            is also search functionality to filter through the different parks
            and display informative popups. The web application utilizes the
            MapBox GL JavaScript Library to visualize the geodata.
          </p>
          <div className={projectStyles.item}>
            <img src={`../../park-finder.png`} alt="Project" srcset="" />

            <a
              href="https://portland-park-finder.herokuapp.com/"
              className={projectStyles.btnLight}
            >
              <i class="fa fa-eye"></i> Project
            </a>
            <a
              href="https://github.com/ylijokic/Chingu-solo-project"
              className={projectStyles.btnDark}
            >
              <i class="fa fa-github"></i> Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
