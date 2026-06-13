import React, { useState, useEffect } from "react";
import MuiLink from "@mui/material/Link"; 
import { Link as RouterLink } from "react-router-dom"; // Added React Router Link
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FaHome, FaInfo, FaTools, FaProjectDiagram } from "react-icons/fa";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "/assets/project-2.png",
    title: "Hospital Management System",
  },
  {
    img: "/assets/Fligh.jpg",
    title: "Flight-Booking",
  },
  {
    img: "/assets/Do.jpg",
    title: "TO-DO-List",
  },
  {
    img: "/assets/RES.jpg",
    title: "Chinese-restaurant",
  },
  {
    img: "/assets/Do.jpg",
    title: "TO-DO-List",
  },
  {
    img: "/assets/ERP.png",
    title: "First-ERP-System-Project",
  },
  {
    img: "/assets/Fligh.jpg",
    title: "Flight-Booking",
  },
  {
    img: "/assets/RES.jpg",
    title: "Chinese-restaurant",
  },
   {
    img: "/assets/Meal-tracker.jpg",
    title: "Meal-Tracker",
  },
];

const MasonryImageList = () => {
  const [hoveredItems, setHoveredItems] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredItems((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setHoveredItems((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleButtonClick = (title) => {
    const liveDemoUrls = {
      "Flight-Booking": "https://himel-sarker.github.io/Flight-Booking/",
      "TO-DO-List": "https://himel-sarker.github.io/TO-DO-List/",
      "First-ERP-System-Project": "https://github.com/himel-sarker/FirstErpSystem", 
      "Airtravel-Site": "https://himel-sarker.github.io/Airtravel-Site/",
      "Chinese-restaurant": "https://himel-sarker.github.io/Mod5_Assignmnet/",
      "Meal-Tracker": "https://six-star-mass.netlify.app/",
    };
    const liveDemoUrl = liveDemoUrls[title];
    if (liveDemoUrl) {
      window.open(liveDemoUrl, "_blank", "noopener,noreferrer");
    } else {
      alert(`No live demo available for project: ${title}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageList
        variant="masonry"
        cols={4}
        gap={6}
        sx={{
          "@media (max-width: 481px)": {
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "2px",
          },
        }}
      >
        {itemData.map((item, index) => (
          <ImageListItem 
            key={index} // <--- এখানে item.img এর বদলে index দেওয়া হয়েছে
            className="image-list-item"
            style={{
              transform: isMounted ? 'translateY(0)' : 'translateY(-40px)',
              opacity: isMounted ? 1 : 0,
              transition: `transform 1.2s cubic-bezier(0.22, 0.61, 0.36, 1) ${index * 0.15}s, opacity 1.2s cubic-bezier(0.22, 0.61, 0.36, 1) ${index * 0.15}s`
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
            <div className="image-item-overlay">
              {item.title}&nbsp;
              <button
                className="buttonLive"
                onClick={() => handleButtonClick(item.title)}
              >
                Live Demo
              </button>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    
  );
};

const Project = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="project-container"
      style={{
        transform: isMounted ? 'translateY(0)' : 'translateY(-25px)',
        opacity: isMounted ? 1 : 0,
        transition: 'transform 1.8s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 1.8s cubic-bezier(0.22, 0.61, 0.36, 1)'
      }}
    >
      <Breadcrumbs className="project-breadcrumbs" aria-label="breadcrumb">
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
            color: "green",
            fontWeight: "bold",
          }}
        >
          <FaInfo className="mr-0.5" />
          About
        </MuiLink>
        <MuiLink
          underline="hover"
          component={RouterLink}
          to="/skills"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "green",
            fontWeight: "bold",
          }}
        >
          <FaTools className="mr-0.5" />
          Skills
        </MuiLink>
        <MuiLink
          underline="hover"
          component={RouterLink}
          to="/projects"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "lightgreen",
            fontWeight: "bold",
          }}
        >
          <FaProjectDiagram className="mr-0.5" />
          Projects
        </MuiLink>
      </Breadcrumbs>
      <div className="project-content">
        <div className="project-image">
          <h1 className="project-text">
            My&nbsp; <strong style={{ color: "green" }}>Project</strong>
          </h1>
        </div>
        <MasonryImageList />
      </div>
    </div>
  );
};

export default Project;