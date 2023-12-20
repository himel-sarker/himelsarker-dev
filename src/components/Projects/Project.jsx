import React, { useState } from "react";
import Link from "@mui/material/Link";
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
    img: "/assets/home.png",
    title: "Storage Project",
  },
  {
    img: "/assets/Fligh.jpg",
    title: "Flight-Booking",
  },
  {
    img: "/assets/RES.jpg",
    title: "Chinese-restaurant",
  },
];

const MasonryImageList = () => {
  const [hoveredItems, setHoveredItems] = useState({});

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
      "Airtravel-Site": "https://himel-sarker.github.io/Airtravel-Site/",
      "Chinese-restaurant": "https://himel-sarker.github.io/Mod5_Assignmnet/"
    };

    const liveDemoUrl = liveDemoUrls[title];

    if (liveDemoUrl) {
      window.location.href = liveDemoUrl;
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
          '@media (max-width: 481px)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2px',
          },
        }}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={item.img} className="image-list-item">
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
              <button className="buttonLive" onClick={() => handleButtonClick(item.title)}>
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
  return (
    <div className="project-container">
      <Breadcrumbs className="project-breadcrumbs" aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "green",
            fontWeight: "bold",
          }}
          href="/"
        >
          <FaHome className="mr-0.5" />
          HOME
        </Link>
        <Link
          underline="hover"
          sx={{
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
        <Link
          underline="hover"
          sx={{
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
        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "lightgreen",
            fontWeight: "bold",
          }}
          href="/projects"
        >
          <FaProjectDiagram className="mr-0.5" />
          Projects
        </Link>
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
