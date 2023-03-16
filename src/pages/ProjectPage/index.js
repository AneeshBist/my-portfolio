import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../../helpers/ProjectList";
import { GitHub } from "@mui/icons-material";
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
      <GitHub />
    </div>
  );
};

export default ProjectPage;
