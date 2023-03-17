import React from "react";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; 2023 uneezbeast</p>
    </div>
  );
};

export default Footer;
