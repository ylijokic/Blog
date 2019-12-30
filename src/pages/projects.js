import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import projectStyles from "./projects.module.scss"

const Projects = () => {
  return (
    <Layout>
      <div className={projectStyles.projects}>
        <div className={(projectStyles.project, projectStyles.project1)}>
          <h2>Portland Park Finder</h2>
          <h4>Javascript // MapBox API // HTML // CSS</h4>
          <p>
            This web application allows users to interact with GeoJSON data
            points associated with various public parks in Portland, OR. There
            is also search functionality to filter through the different parks
            and display informative popups. Check it out!
          </p>
          <div className={projectStyles.item}>
            <a href="#!">
              <img src="img/projects/project3.jpg" alt="Project" srcset="" />
            </a>
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
        <div className={(projectStyles.project, projectStyles.project2)}>
          <h2>Pinball League Database</h2>
          <h4>Javascript // Node.js // MySQL // Handlebars</h4>
          <p>
            This web application keeps track of informtaion related to a local
            Pinball League. Users can Create, Read, Update, and Delete data
            associated with the various entities of the database. Check out the
            source code!
          </p>
          <div className={projectStyles.item}>
            <a href="#!">
              <img src="img/projects/project1.jpg" alt="Project" srcset="" />
            </a>
            <a href="#!" className={projectStyles.btnLight}>
              <i class="fa fa-eye"></i> Project
            </a>
            <a
              href="https://github.com/ylijokic/CS-340-Project"
              className={projectStyles.btnDark}
            >
              <i class="fa fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className={(projectStyles.project, projectStyles.project3)}>
          <h2>Text-Based Battle Game</h2>
          <h4>C++</h4>
          <p>
            This text based game simulates a team battle where two teams are
            initialized with various characters. The characters face off in 1v1
            battles until one team has no more characters.
          </p>
          <div className={projectStyles.item}>
            <a href="#!">
              <img src="img/projects/project2.jpg" alt="Project" srcset="" />
            </a>
            <a href="#!" className={projectStyles.btnLight}>
              <i class="fa fa-eye"></i> Project
            </a>
            <a
              href="https://github.com/ylijokic/Battle-Game"
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
