import React, { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import { FaHome, FaInfo, FaTools, FaHtml5 } from "react-icons/fa";

function Skill() {
  const [partnersCount, setPartnersCount] = useState(0);
  const [projectsDoneCount, setProjectsDoneCount] = useState(0);
  const [happyClientsCount, setHappyClientsCount] = useState(0);
  const [meetingsCount, setMeetingsCount] = useState(0);

  useEffect(() => {
    // Update counters on initial mount
    updateCounters();

    // Use IntersectionObserver to update counters on visibility
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCounters();
      }
    });

    observer.observe(document.querySelector(".Skills-Achieve"));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  const updateCounters = () => {
    // Define the target values
    const targetPartnersCount = 11;
    const targetProjectsDoneCount = 20;
    const targetHappyClientsCount = 30;
    const targetMeetingsCount = 50;

    // Set the interval and increment for each counter
    const interval = 2; // milliseconds
    const increment = 1;

    // Function to smoothly update counters
    const updateCounter = (currentValue, targetValue, setter) => {
      if (currentValue < targetValue) {
        const newValue = Math.min(currentValue + increment, targetValue);
        setter(newValue);
        setTimeout(
          () => updateCounter(newValue, targetValue, setter),
          interval
        );
      }
    };

    // Start updating counters
    updateCounter(partnersCount, targetPartnersCount, setPartnersCount);
    updateCounter(
      projectsDoneCount,
      targetProjectsDoneCount,
      setProjectsDoneCount
    );
    updateCounter(
      happyClientsCount,
      targetHappyClientsCount,
      setHappyClientsCount
    );
    updateCounter(meetingsCount, targetMeetingsCount, setMeetingsCount);
  };

  return (
    <>
      <Breadcrumbs className="AboutBred" aria-label="breadcrumb">
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
            color: "lightgreen",
            fontWeight: "bold",
          }}
          href="/skills"
        >
          <FaTools className="mr-0.5" />
          Skills
        </Link>
      </Breadcrumbs>

      <div className="skill-name">
        <h1 className="skill-text">
          My&nbsp; <strong style={{ color: "green" }}> Skills</strong>
        </h1>
      </div>
      <Typography variant="h2" className="heading-three">
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="subheading mb-2">
          <li>HTML5</li>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "success.main" }}
          />

          <li>CSS3</li>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "success.main" }}
          />

          <li>JavaScript</li>
          <LinearProgress
            variant="determinate"
            value={65}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />

          <li>React</li>
          <LinearProgress
            variant="determinate"
            value={59}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />

          <li>NodeJs</li>
          <LinearProgress
            variant="determinate"
            value={55}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />

          <li>PHP</li>
          <LinearProgress
            variant="determinate"
            value={65}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />

          <li>Laravel</li>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />
        </ul>
      </Typography>

      <div className="Skills-Achieve">
        <div className="Happyness">
          <div className="section1">
            <span className="Hh-xlarge">{partnersCount}+</span>
            <br />
            Partners
          </div>

          <div className="section1">
            <span className="Hh-xlarge">{projectsDoneCount}+</span>
            <br />
            Projects Done
          </div>

          <div className="section1">
            <span className="Hh-xlarge">{happyClientsCount}+</span>
            <br />
            Happy Clients
          </div>
          <div className="section1">
            <span className="Hh-xlarge">{meetingsCount}+</span>
            <br />
            Meetings
          </div>
        </div>
      </div>

      <div className="GD-media">
        <ul className="list-inline">
          <li className="Button1">
            <Button
              component="a"
              onClick={() =>
                (window.location.href = "https://github.com/Himel-Sarker1")
              }
              target="_blank"
            >
              GitHub
              <FaHome />
            </Button>
          </li>
          <li className="Button2">
            <Button
              component="a"
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/file/d/1C2oBG6MGsl6WWAzbOAY9daaL_txSju5c/view")
              }
              target="_blank"
            >
              Download
              <FaHtml5 />
            </Button>
          </li>
        </ul>
      </div>

      <div className="Fields">
        <div className="subheading mb-3">
          <h2>Interested Fields</h2>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Web development" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="IOT related projects" />
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
}

export default Skill;
