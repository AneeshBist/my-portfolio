import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../../helpers/ProjectList";
import { GitHub, Http } from "@mui/icons-material";
import "./styles.css";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={id} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a
        className="click-me"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        {project.type === "website" ? <Http /> : <GitHub />}
      </a>
    </div>
  );
};

export default ProjectPage;
