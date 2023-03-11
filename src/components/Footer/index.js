import React from "react";
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Twitter />
        <GitHub />
        <LinkedIn />
      </div>
      <p> &copy; 2023 uneezbeast</p>
    </div>
  );
};

export default Footer;
