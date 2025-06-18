import { Helmet } from "react-helmet";
import "./styles/Projects.css";
import data from "../db/db.json"

const Projects = () => {

  const projects = data["projects"]

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
                src={project["image"]}
                alt={project["title"]}
              />
              <h2 className="project-title">{project["title"]}</h2>
              <p className="project-description">{project["description"]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
