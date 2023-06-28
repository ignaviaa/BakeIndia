import React from "react";
import InstagramIcon from "@mui/icons-material//Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import creme from "../assets/Cover/cream.svg"
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <hr />
      <p> &copy; 2023, Radhe-Radhe Bake India's All rights reserved.</p>
    </div>
  );
}

export default Footer;