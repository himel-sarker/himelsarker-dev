import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

import {
  FaHome,
  FaInfo,
  FaTools,
  FaProjectDiagram,
  FaBookOpen,
} from "react-icons/fa";

const Blog = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Function to check if all images are loaded
    const areImagesLoaded = () => {
      const images = document.querySelectorAll(".img-fluid");
      return Array.from(images).every((img) => img.complete);
    };

    // Check if all images are loaded
    const checkImagesLoaded = () => {
      if (areImagesLoaded()) {
        setImagesLoaded(true);
      }
    };

    // Attach load event listener to each image
    const images = document.querySelectorAll(".img-fluid");
    images.forEach((img) => {
      img.addEventListener("load", checkImagesLoaded);
    });

    // Cleanup: Remove event listener when component unmounts
    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", checkImagesLoaded);
      });
    };
  }, []);

  return (
    <div className="Skill-Container">
    
    <div className={`Blog-main ${imagesLoaded ? "loaded" : ""}`}>
      <div className="Blog-container">
        <Breadcrumbs className="BlogBred" aria-label="breadcrumb">
          {/* Home Link */}
          <Link
            underline="hover"
            style={{
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

          {/* About Link */}
          <Link
            underline="hover"
            style={{
              display: "flex",
              alignItems: "center",
              color: "green",
              fontWeight: "bold",
            }}
            href="/about"
          >
            <FaInfo className="mr-0.5" />
            About
          </Link>

          {/* Skills Link */}
          <Link
            underline="hover"
            style={{
              display: "flex",
              alignItems: "center",
              color: "green",
              fontWeight: "bold",
            }}
            href="/skills"
          >
            <FaTools className="mr-0.5" />
            Skills
          </Link>

          {/* Projects Link */}
          <Link
            underline="hover"
            style={{
              display: "flex",
              alignItems: "center",
              color: "green",
              fontWeight: "bold",
            }}
            href="/projects"
          >
            <FaProjectDiagram className="mr-0.5" />
            Projects
          </Link>

          {/* Blogs Link */}
          <Link
            underline="hover"
            style={{
              display: "flex",
              alignItems: "center",
              color: "lightgreen",
              fontWeight: "bold",
            }}
            href="/blogs"
          >
            <FaBookOpen className="mr-0.5" />
            Blogs
          </Link>
        </Breadcrumbs>

        {/* Blog Content */}
        <div className="Blog-content">
          <div className="Blog-name">
            <h1 className="Blog-text">
              My&nbsp; <strong style={{ color: "green" }}> Latest Blogs</strong>
            </h1>
          </div>
          {/* First Article */}
          <div className="Blog-One">
            <div className="row">
              <div className="col-md-6 order-md-1">
                <div className="imgOne">
                  <img
                    src="/assets/API&SQL.png"
                    alt=""
                    className="img-fluid blog-image" // Added class "blog-image"
                  />
                </div>
              </div>

              <div className="col-md-6 order-md-2">
                <div className="article-content">
                  <Typography variant="h4" gutterBottom>
                    1. Optimizing ASP.NET Web APIs for Real-Time ERP Systems (With Practical Examples)
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Features
                  </Typography>
                  <Typography paragraph>
                   A professional ASP.NET developer must think in two dimensions at the same time:
                   How the API behaves & How SQL Server executes the request.This article explains ERP-focused optimization techniques, showing both ASP.NET and SQL Server perspectives together, with real code examples.&nbsp;
                    <button
                      onClick={() =>
                        (window.location.href =
                          "https://medium.com/@himelsarker/optimizing-asp-net-web-apis-for-real-time-erp-systems-with-practical-examples-2d848b27f779")
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more...
                    </button>
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Second Article */}
          <div className="Blog-two">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <div className="imgTwo">
                  <img
                    src="/assets/Meh2.png"
                    alt=""
                    className="img-fluid blog-image" // Added class "blog-image"
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <div className="article-content">
                  <Typography variant="h4" gutterBottom>
                    2. Some important method of JavaScript{" "}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Features
                  </Typography>
                  <Typography paragraph>
                    What is JavaScript? JavaScript is a scripting or programming
                    language that allows you to implement complex features on
                    web pages. JavaScript can update and change both HTML and
                    CSS. JavaScript can calculate, manipulate and validate
                    data.&nbsp;
                    <button
                      onClick={() =>
                        (window.location.href =
                          "https://medium.com/@himelsarker85/some-important-method-of-javascript-7db5c95bd9e4")
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more...
                    </button>
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Third Article */}
          <div className="Blog-third">
            <div className="row">
              <div className="col-md-6 order-md-1">
                <div className="imgThird">
                  <img
                    src="/assets/reactJS3.png"
                    alt=""
                    className="img-fluid blog-image" // Added class "blog-image"
                  />
                </div>
              </div>

              <div className="col-md-6 order-md-2">
                <div className="article-content">
                  <Typography variant="h4" gutterBottom>
                    3. Introduction To React.JS
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Features
                  </Typography>
                  <Typography paragraph>
                    React React is a javascript library for building UI. It is a
                    declarative, efficient, and flexible javascript library.
                    Every react application build depends on components. It’s
                    also components-based architecture. It’s a virtual DOM that
                    depends on elements’ behaviors.&nbsp;
                    <button
                      onClick={() =>
                        (window.location.href =
                          "https://medium.com/@himelsarker85/introduction-to-react-js-2624f8bbd3c7")
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more...
                    </button>
                  </Typography>
                </div>
              </div>
            </div>
          </div>

         {/* Fourth Article */}
     <div className="Blog-Four">
      <div className="row">
        <div className="col-md-6 order-md-1">
          <div className="article-content">
            <Typography variant="h4" gutterBottom>
              4. SQL Basics…!
            </Typography>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <Typography paragraph>
              SQL Basics Cheat Sheet…! What is SQL?
              <br />
              SQL (Structured Query Language) is the standard language for
              managing relational databases.
            </Typography>
            <button
              onClick={() =>
                (window.location.href =
                  "https://medium.com/@himelsarker85/sql-basics-cheat-sheet-75cd9d3aa6e4")
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more...
            </button>
          </div>
        </div>

        {/* Image second (visually on the right) */}
        <div className="col-md-6 order-md-2">
          <div className="imgFour">
            <img
              src="/assets/SQL.png"
              alt="SQL Basics"
              className="img-fluid blog-image"
            />
          </div>
        </div>
      </div>
      </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Blog;
