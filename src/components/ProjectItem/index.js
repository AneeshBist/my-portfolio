import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, link, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="project-item"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-image"
      ></div>
      <h1 className="project-title">{name}</h1>
    </div>
  );
};

export default ProjectItem;
