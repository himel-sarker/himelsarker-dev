import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Scroll, ScrollToTopButton } from "./Scroll";

// Define SocialLink component
const SocialLink = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

function Footer() {
  // Background style for the footer
  const backgroundStyle = {
    backgroundImage: "url(./assets/pic.jpg)",
  };

  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container">
          {/* Footer with background style */}
          <div className="page-footer fixed-width" style={backgroundStyle}>
            <Scroll>
              <div className="footer-content">
                <br />
                {/* Contact Us section */}
                <div className="footer-one">
                  <h5>Contact Us</h5>
                  <address>
  House #11, Road # K/A, Bashundhara R/A, Dhaka-1229, Bangladesh
  <br />
  <br />
  <div className="phone-numbers">
    <span>Phone: +880 1795114407,</span>
    <span>+880 1976022060</span> <br/>
    <span>E-mail: himelsarker.softdev@gmail.com</span>
  </div>
</address><br/>
                  <h4 style={{ color: "green" }}>Disclaimer</h4>
                  <p>
                    <span style={{ color: "#38807", fontWeight: "bold" }}>
                      Opinions expressed here are my own.
                    </span>
                  </p>
                </div>
                {/* Credits and Copyright section */}
                <div className="footer-two">
                  <small className="credits">
                    Site Designed by{" "}
                    <a href="#" style={{ fontWeight: "bold", color: "green" }}>
                      Himel Sarker
                    </a>
                  </small>
                  <br />
                  <small className="copyright">
                    © Copyright 2025. All Rights Reserved
                  </small>
                  <br />
                  {/* Social media links section using MUI Icons */}
                  <div className="Social">
                    <SocialLink
                      href="https://twitter.com/himel_sarker1"
                      icon={<TwitterIcon fontSize="large" />}
                    />
                    <SocialLink
                      href="https://www.facebook.com/himelsarker0"
                      icon={<FacebookIcon fontSize="large" />}
                    />
                    <SocialLink
                      href="https://www.youtube.com/channel/UCvgO4R1FmaH8UFoaJ8uS_yA"
                      icon={<YouTubeIcon fontSize="large" />}
                    />
                  </div>
                </div>
              </div>
            </Scroll>
          </div>
        </div>
      </div>
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </>
  );
}

export default Footer;