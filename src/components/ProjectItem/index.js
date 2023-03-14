import React from "react";

const ProjectItem = ({ image, name, link }) => {
  return (
    <a className="project-item" target="_blank" href={link} rel="noreferrer">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-image"
      ></div>
      <h1 className="project-title">{name}</h1>
    </a>
  );
};

export default ProjectItem;
