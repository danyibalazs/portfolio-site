import React from "react";

import project1Pic from "../images/project1.png";
import project2Pic from "../images/project2.png";
import project3Pic from "../images/project3.png";

const Projects = () => {
  return (
    <section>
      <div className="main-container">
        <h3 id="projects-header">Some of my projects</h3>
        <div className="projects-wrapper">
          <div>
            <div className="project">
              <img
                className="thumbnail"
                src={project1Pic}
                alt="Project Thumbnail"
              />
              <div className="project-preview">
                <h4>Recipe App</h4>
                <p className="project-intro about-p">
                  A simple recipe application with user authentication, REDUX
                  state management and Bootstrap for styling. Key technologies:
                  React, MongoDB and Express.
                </p>
                <div className="link-wrapper">
                  <a
                    href="https://vast-savannah-55735.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                  <a
                    href="https://github.com/danyibalazs/recipe_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="project">
              <img
                className="thumbnail"
                src={project2Pic}
                alt="Project Thumbnail"
              />
              <div className="project-preview">
                <h4>Riff Storage</h4>
                <p className="project-intro about-p">
                  The user can upload audio files to the cloud (AWS S3), list
                  the saved files and play or download those. Key technologies:
                  React, MongoDB and Express.
                </p>
                <div
                  className="link-wrapper"
                  style={{ justifyContent: "flex-end" }}
                >
                  <a
                    href="https://github.com/danyibalazs/codeclan_final_project_riffs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="project">
              <img
                className="thumbnail"
                src={project3Pic}
                alt="Project Thumbnail"
              />
              <div className="project-preview">
                <h4>Spending Tracker</h4>
                <p className="project-intro about-p">
                  An application that allows users to track their spendings by
                  managing categories, merchants and transactions. Key
                  technologies: Ruby, PostgreSQL, Sinatra.
                </p>
                <div className="link-wrapper">
                  <a
                    href="https://spending-tracker-sinatra.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                  <a
                    href="https://github.com/danyibalazs/project1_spending_tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
