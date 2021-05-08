import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import projectStyles from "./projects.module.scss"
import Head from "../components/head"
import layoutStlyes from "../components/layout.module.scss"

const Projects = () => {
  return (
    <Layout>
      <Head title={"My Projects"} />
        <div className={layoutStlyes.content}>
          <div className={(projectStyles.project, projectStyles.project1)}>
            <h2> NASA Natural Disaster Map</h2>
            <h4>Javascript ~~ Node.js ~~ React.js ~~ Google Maps API</h4>
            <p>
              This web application utilizes data from the NASA Open API, as well as 
              the Google Maps API, to display a map of current fires and volcanoes. The
              user is able to click on icons to display more detailed information related
              to the natural disaster. This web application also utilizes the Material Design
              library to display modern React components. Have a look at the website to view
              the application, or take a look at the GitHub repository for source code. 
              <br/>
            </p>
            <div className={projectStyles.item}>
              <img src={`../../NasaDisaster.png`} alt="Project" srcset="" />
              <a
                href="https://hopeful-liskov-9bb720.netlify.app/"
                className={projectStyles.btnLight}
              >
                <i class="fa fa-eye"></i> Project
              </a>
              <a
                href="https://github.com/ylijokic/nasa_disaster_map"
                className={projectStyles.btnDark}
              >
                <i class="fa fa-github"></i> Github
              </a>
            </div>
          </div>
        </div>
        <br/>
        <div className={layoutStlyes.content}>
          <div className={(projectStyles.project, projectStyles.project3)}>
            <h2>Flixster Android App</h2>
            <h4>Java ~~ Android Studio ~~ JSON</h4>
            <p>
              This mobile android application allows users to browse movies from the The Movie Database API.
              <br/>
              <br/>
              Users can view a list of newly released movies which includes details related to the movie description,
              movie poster, and movie rating. By clicking on the movie detail the application brings the user to a new page
              where an embedded YouTube clip can be played. Check out the ReadMe on the GitHub link for more information!
            </p>
            <div className={projectStyles.item}>
              <img src={`../../Flixster_Walkthrough_Portrait(3).gif`} alt="Project" srcset=""/>
              <a
                href="https://github.com/ylijokic/Flixster"
                className={projectStyles.btnDark}
              >
                <i class="fa fa-github"></i> Github
              </a>
            </div>
          </div>
        </div>
        <br/>
        <div className={layoutStlyes.content}>
          <div className={(projectStyles.project, projectStyles.project3)}>
            <h2>CSV File Parser</h2>
            <h4>C Programming</h4>
            <p>
              This program reads data related to movies from a CSV file and stores the information
              into a Linked List of Movie struct objects. 
              <br/>
              <br/>
              Users can choice from a menu of options to select what CSV file they would like to parse. Once a
              CSV file is selected, the program makes a new directory and creates one text file for every unique release 
              year. The text files are named based on the year (ex. 2020.txt) and contains a list of  all the movies released that year.
            </p>
            <div className={projectStyles.item}>
              <img src={`../../CSV_Parser_Walkthrough.gif`} alt="Project" srcset="" />
              <a
                href="https://github.com/ylijokic/CSV_Parser"
                className={projectStyles.btnDark}
              >
                <i class="fa fa-github"></i> Github
              </a>
            </div>
          </div>
        </div>
        <br/>
        <div className={layoutStlyes.content}>
          <div className={(projectStyles.project, projectStyles.project3)}>
            <h2>Small Shell Terminal</h2>
            <h4>C Programming ~~ Linux</h4>
            <p>
              This program is a a small version of a shell terminal. The program has three built-in Shell
              commands: change directory, get status, and exit. All other commands are run by forking the parent
              process and calling the execvp function. 
              <br/>
              <br/>
              Users are able to run most all commands that are common to a typical linux shell such as bash & zsh.
            </p>
            <div className={projectStyles.item}>
              <img src={`../../Shell_Terminal_Walkthrough.gif`} alt="Project" srcset="" />
              <a
                href="https://github.com/ylijokic/Small_Shell_Terminal"
                className={projectStyles.btnDark}
              >
                <i class="fa fa-github"></i> Github
              </a>
            </div>
          </div>
        </div>
        <br/>
        <div className={layoutStlyes.content}>
          <div className={(projectStyles.project, projectStyles.project1)}>
            <h2>Foodie Finds:</h2>
            <h2> Recipe Search Web Application</h2>
            <h4>Javascript ~~ Node.js ~~ React.js ~~ Sass</h4>
            <p>
              This web application allows users to search for their favorite
              recipes! The user can filter recipes based on meal type or they can
              filter based on key words. We utilized the Spoonacular web api to
              make endpoint requests and retrieve the recipe data. The application
              is built using JavaScript, React.js Library, Node.js, and Sass. 
              <br/>
              <br/>
              This project was part of a group effort during a
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
        </div>
        <br/>
        {/* <div className={layoutStlyes.content}>
          <div className={(projectStyles.project, projectStyles.project2)}>
            <h2>One Hit Wonder: </h2>
            <h2>Musician Matching Social Application</h2>
            <h4>Python ~~ Django ~~ JavaScript ~~ AWS ~~ Bootstrap</h4>
            <p>
              The OneHitWonder application is a Django based web-app that enables
              both musicians looking for work and venue owners looking for
              Musicians to connect with one another. Employers can post experience targeted advertisements
              to musicians that match the employers desired criteria. All data
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
        </div>
        <br/> */}
        <div className={layoutStlyes.content}>
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
