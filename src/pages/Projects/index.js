import React from "react";
import ProjectItem from "../../components/ProjectItem";

import "./styles.css";
import { projectList } from "../../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectList.map((project, id) => {
          return (
            <ProjectItem
              key={id}
              id={id}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
