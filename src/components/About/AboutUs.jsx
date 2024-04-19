import React from "react";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FaHome, FaInfo } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-container ">
      <Breadcrumbs className="AboutBred" aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "green",
            fontWeight: "bold",
          }}
          href="/home"
        >
          <FaHome className="mr-0.5" />
          HOME
        </Link>
        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "lightgreen",
            fontWeight: "bold",
          }}
          href="/about"
        >
          <FaInfo className="mr-0.5" />
          About
        </Link>
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
          Progoti Shoroni, K/A Joar Shara Baza, Kuril, Bashundhara, Dhaka, 1229
          · (+880) 1795-114407 <br />
          <a href="mailto:himelsarker85@gmail.com">
            <span className="email-green">himelsarker85@gmail.com</span>
          </a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <br />

        <ul>
          <li className="social-one">
            <a href="https://www.linkedin.com/in/himel-sarker-7738b9180/">
              <i className="icon fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="social-two">
            <a href="https://github.com/Himel-Sarker1">
              <i className="icon fab fa-github"></i>
            </a>
          </li>
          <li className="social-three">
            <a href="https://twitter.com/himel_sarker1">
              <i className="icon fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-four">
            <a href="https://www.facebook.com/Himelsarker01/">
              <i className="icon fab fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
