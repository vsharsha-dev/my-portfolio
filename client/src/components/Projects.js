import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((response) => {
        setProjects(response.data);
        console.log(projects);
      })
      .catch((error) => {
        console.error("Error fetching projects: ", error);
      });
  }, [projects]);

  return (
    <>
      <Helmet>
        <title>{"Projects"}</title>
      </Helmet>
      <div className="projects">
        <h1 className="projects-heading">Projects</h1>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
