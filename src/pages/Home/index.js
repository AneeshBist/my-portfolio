import React from "react";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Aneesh</h2>
        <div className="prompt">
          <p> A Software Developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/aneeshbist/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/AneeshBist"
            rel="noreferrer"
            target="_blank"
          >
            <GitHub />
          </a>
          <a href="mailto:uneezbeast@gmail.com">
            <Email />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="skill-list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, React-Native, HTML, CSS, BootStrap, MaterialUI,
              TailWindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, core JAVA, JAVA Spring, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, Javascript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
