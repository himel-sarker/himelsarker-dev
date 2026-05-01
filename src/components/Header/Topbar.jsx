import React from "react";
import { Row, Col } from "reactstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ScheduleIcon from "@mui/icons-material/Schedule";
import "./Topbar.css"; // Ensure CSS is correctly imported

function Topbar() {
  return (
    <Row className="topbar">
      {/* Social Links */}
      <Col lg className="col-12 text-center text-lg-left">
        <div className="sp-column">
          <ul className="box sp-contact-info">
            <li className="facebook">
              <a
                href="https://www.facebook.com/himelsarker0"
                aria-label="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon style={{ fontSize: "30px" }} />
                Facebook
              </a>
            </li>
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/in/himel-sarker/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ fontSize: "30px" }} />
                LinkedIn
              </a>
            </li>
            <li className="instagram">
              <a
                href="https://www.instagram.com/himel_sarker1/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ fontSize: "30px" }} />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </Col>
      {/* Contact Info */}
      <Col lg className="col-12 text-center text-lg-right">
        <div className="sp-column">
          <ul className="box sp-contact-info">
            <li className="sp-contact-phone">
              <a href="tel:+8801795114407">
                <PhoneIcon style={{ fontSize: "30px" }} />
                +880 1795-114407
              </a>
            </li>
            <li className="sp-contact-email">
              <a href="mailto:himelsarker.softdev@gmail.com">
                <EmailIcon style={{ fontSize: "30px" }} />
                himelsarker.softdev@gmail.com
              </a>
            </li>
            <li className="sp-contact-time">
              <ScheduleIcon style={{ fontSize: "30px" }} />
              &nbsp;24/7: 24 Hours
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default Topbar;