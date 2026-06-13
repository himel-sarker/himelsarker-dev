import React from "react";
import MuiLink from "@mui/material/Link"; 
import { Link as RouterLink } from "react-router-dom"; // Added React Router Link
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FaHome, FaInfo } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-container ">
      <Breadcrumbs className="AboutBred" aria-label="breadcrumb">
        <MuiLink
          underline="hover"
          component={RouterLink}
          to="/home"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "green",
            fontWeight: "bold",
          }}
        >
          <FaHome className="mr-0.5" />
          HOME
        </MuiLink>
        <MuiLink
          underline="hover"
          component={RouterLink}
          to="/about"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "lightgreen",
            fontWeight: "bold",
          }}
        >
          <FaInfo className="mr-0.5" />
          About
        </MuiLink>
      </Breadcrumbs>

      <div className="My-about ">
        <h1>
          <strong style={{ color: "green" }}>About</strong>
        </h1>
        <br />
        <p>
          Hi, I'm Himel Sarker.the author and creator of this portfolio. I
          instruct various courses and work in Developer Relations. Passionate
          about Linux, I also contribute to content moderation as a Customer
          Service Officer. Additionally, I'm a skilled web technologist.
        </p>
      </div>

      <div className="Details-about">
        <h1 className="mb-0">
          Himel&nbsp;<strong style={{ color: "green" }}>Sarker</strong>
        </h1>
        <div className="subheading mb-5">
          Progoti Shoroni, K/A Joar Shara Baza, Kuril, Bashundhara, Dhaka, 1229 <br />
          (+880) 1795-114407 <br />
          <a href="mailto:himelsarker.softdev@gmail.com" className="email-link">
                 himelsarker.softdev@gmail.com
          </a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <br />
        <div className="social-item">
          <ul>
            <li className="social-one">
              <a href="https://www.linkedin.com/in/himel-sarker/">
                <i className="icon fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="social-two">
              <a href="https://github.com/himel-sarker">
                <i className="icon fab fa-github"></i>
              </a>
            </li>
            <li className="social-three">
              <a href="https://twitter.com/himel_sarker1">
                <i className="icon fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-four">
              <a href="https://www.facebook.com/himelsarker0/">
                <i className="icon fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;