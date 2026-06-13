import React, { useState, useEffect } from "react";
import MuiLink from "@mui/material/Link"; 
import { Link as RouterLink } from "react-router-dom"; // Added React Router Link
import Breadcrumbs from "@mui/material/Breadcrumbs";
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
    const targetHappyClientsCount = 40;
    const targetMeetingsCount = 80;

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
    
    <div className="Skill-Container">
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
            color: "lightgreen",
            fontWeight: "bold",
          }}
        >
          <FaTools className="mr-0.5" />
          Skills
        </MuiLink>
      </Breadcrumbs>

      <div className="skill-name">
        <h1 className="skill-text">
          My&nbsp; <strong style={{ color: "green" }}> Skills</strong>
        </h1>
      </div>
      
      <div className="heading-three">
      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <div className="skills-container">
        {/* <li> এর বদলে <span> ব্যবহার করা হয়েছে DOM error এড়াতে */}
        <div className="skill">
          <span>HTML5</span>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "success.main" }}
          />
        </div>
        <div className="skill">
          <span>CSS3</span>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "success.main" }}
          />
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <LinearProgress
            variant="determinate"
            value={65}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />
        </div>

        <div className="skill">
          <span>C#</span>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />
        </div>
        <div className="skill">
          <span>React.js </span>
          <LinearProgress
            variant="determinate"
            value={59}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />
        </div>
        <div className="skill">
          <span>Node.js</span>
          <LinearProgress
            variant="determinate"
            value={55}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />
        </div>
        <div className="skill">
          <span>PHP</span>
          <LinearProgress
            variant="determinate"
            value={65}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />
        </div>
        <div className="skill">
          <span>Laravel</span>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{ height: 8, borderRadius: 4, backgroundColor: "danger.main" }}
          />
        </div>
      </div>
    </div>

  
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
            {/* MUI Button এ সরাসরি href ব্যবহার করা হয়েছে */}
            <Button
              href="https://github.com/himel-sarker"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FaHome />}
            >
              GitHub
            </Button>
          </li>
          <li className="Button2">
            {/* MUI Button এ সরাসরি href ব্যবহার করা হয়েছে */}
            <Button
              href="https://drive.google.com/file/d/1C2oBG6MGsl6WWAzbOAY9daaL_txSju5c/view"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FaHtml5 />}
            >
              Download CV
            </Button>
          </li>
        </ul>
      </div>


      <div className="fields-container">
        <h2>Interested Fields</h2>
        <ul className="fields-list">
          <li className="fields-list-item">
            <span className="list-item-icon">✓</span>
            <span>Web Development</span>
          </li>
          <li className="fields-list-item">
            <span className="list-item-icon">✓</span>
            <span>Artificial Intelligence & Machine Learning</span>
          </li>
          <li className="fields-list-item">
            <span className="list-item-icon">✓</span>
            <span>Cloud Computing & DevOps</span>
          </li>
          <li className="fields-list-item">
            <span className="list-item-icon">✓</span>
            <span>Cybersecurity & Data Privacy</span>
          </li>
        </ul>
      </div>

  </div>
     
  
  );
}

export default Skill;