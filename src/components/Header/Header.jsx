import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

import {
  FaHome,
  FaInfo,
  FaTools,
  FaProjectDiagram,
  FaBookOpen,
  FaEnvelope,
} from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const theme = createTheme({});

  // Define a function to handle smooth scroll
  const handleSmoothScroll = (targetId) => {
    // console.log(`Scrolling to: ${targetId}`);

    scroller.scrollTo(targetId, {
      duration: 700,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: -60,
    });

    setIsOpen(false); // Close the Navbar when a link is clicked
  };

  return (
    <div className="Flex-Nav sticky-top">
      <header className="page-header">
        <div className="fixed-width clearfix">
          <ThemeProvider theme={theme}>
            <Navbar
              color="dark"
              dark
              expand="md"
              style={{ position: "sticky", top: 0, zIndex: 100 }}
              className="container-fluid p-0"
            >
              <NavbarBrand
                className="nav-link"
                tag={Link}
                to="/home"
                onClick={() => handleSmoothScroll("home-section")}
              >
                <img
                  className="nav-Img"
                  alt="logo"
                  src="/assets/home.png"
                  style={{
                    height: 40,
                    width: 40,
                    marginRight: "10px",
                  }}
                />
                <em className="identity">Himel Sarker</em>
              </NavbarBrand>

              <NavbarToggler
                onClick={toggle}
                aria-controls="navbarNav"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              />

              <Collapse isOpen={isOpen} navbar>
                <Nav className="NavCustomize" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      tag={Link}
                      to="/home"
                      onClick={() => handleSmoothScroll("home-section")}
                    >
                      Home Page
                      <em>
                        <FaHome color="secondary" size={24} />
                        Home
                      </em>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link"
                      tag={Link}
                      to="/about"
                      onClick={() => handleSmoothScroll("about-section")}
                    >
                      Who are we?
                      <em>
                        <FaInfo color="success" size={24} />
                        About
                      </em>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link"
                      tag={Link}
                      to="/skills"
                      onClick={() => handleSmoothScroll("skills-section")}
                    >
                      My Skills
                      <em>
                        <FaTools color="success" size={24} />
                        Skills
                      </em>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link"
                      tag={Link}
                      to="/projects"
                      onClick={() => handleSmoothScroll("projects-section")}
                    >
                      My Portfolio
                      <em>
                        <FaProjectDiagram color="success" size={24} />
                        Projects
                      </em>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link"
                      tag={Link}
                      to="/blogs"
                      onClick={() => handleSmoothScroll("blogs-section")}
                    >
                      Latest News
                      <em>
                        <FaBookOpen color="success" size={24} />
                        Blogs
                      </em>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link"
                      tag={Link}
                      to="/contact"
                      onClick={() => handleSmoothScroll("contact-section")}
                    >
                      Get in Touch
                      <em>
                        <FaEnvelope color="success" size={24} />
                        Contact Us
                      </em>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </ThemeProvider>
        </div>
      </header>
    </div>
  );
}

export default Header;
