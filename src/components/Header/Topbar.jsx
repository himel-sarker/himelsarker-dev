import React from "react";
import { Row, Col } from "reactstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ScheduleIcon from "@mui/icons-material/Schedule";

function Topbar() {
  return (
    <Row className="Topbar">
      <Col lg className="col-12 text-center text-lg-left">
        <div className="sp-column">
          <ul className="box sp-contact-info">
            <li className="facebook">
              <FacebookIcon style={{ fontSize: "30px" }} />
              <a
                href="https://www.facebook.com/Himelsarker01"
                aria-label="facebook"
              >
                Facebook
              </a>
            </li>

            <li className="linkedin">
              <LinkedInIcon style={{  fontSize: "30px" }} />
              <a
                href="https://www.linkedin.com/in/himel-sarker-7738b9180/"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </li>

            <li className="instagram">
              <InstagramIcon style={{  fontSize: "30px" }} />
              <a href="https://www.instagram.com/himel_sarker1/">Instagram</a>
            </li>
          </ul>
        </div>
      </Col>

      {/* Contact Information */}
      <Col lg className="col-12 text-center text-lg-right">
        <div className="sp-column">
          <ul className="box sp-contact-info">
            <li className="sp-contact-phone">
              <PhoneIcon style={{ fontSize: "30px" }} />
              <a href="tel:+880 1795114407">+880 1795114407</a>
            </li>

            <li className="sp-contact-email">
              <EmailIcon style={{ fontSize: "30px" }} />
              <a href="mailto:himelsarker85@gmail.com">
                himelsarker85@gmail.com
              </a>
            </li>

            <li className="sp-contact-time">
              <ScheduleIcon style={{ fontSize: "30px" }} />
              24/7: 24 Hours
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default Topbar;
