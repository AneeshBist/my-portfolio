import React from "react";
import ProjectItem from "../../components/ProjectItem";
import img_hwcs from "../../assets/img_hwcs.png";
import img_auraaClinic from "../../assets/img_auraaClinic.png";
import "./styles.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <ProjectItem
          name="H.W.C.S."
          image={img_hwcs}
          link="www.himalayanwomensociety.com"
        />
        <ProjectItem
          name="Auracc CLinic"
          image={img_auraaClinic}
          link="www.auraaclinic.com"
        />
      </div>
    </div>
  );
};

export default Projects;
