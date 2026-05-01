import React, { useState, useEffect, useRef } from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "bootstrap/dist/css/bootstrap.min.css";

const WebDeveloperAnimation = () => {
  const words = ["Software Developer", ".Net & React.js Lover"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const pauseDuration = 1000; // Pause after typing/deleting
  const typingSpeedRef = useRef(typingSpeed);
  const isDeletingRef = useRef(isDeleting);
  const currentIndexRef = useRef(currentIndex);

  // Update refs when state changes
  useEffect(() => {
    typingSpeedRef.current = typingSpeed;
    isDeletingRef.current = isDeleting;
    currentIndexRef.current = currentIndex;
  }, [typingSpeed, isDeleting, currentIndex]);

  useEffect(() => {
    const currentWord = words[currentIndex];
    
    const handleTyping = () => {
      if (isDeletingRef.current) {
        // Deleting characters
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText.length === 1) {
          // Pause before switching to next word
          setTimeout(() => {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % words.length);
          }, pauseDuration);
        }
      } else {
        // Typing characters
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText.length === currentWord.length) {
          // Pause before starting deletion
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeedRef.current);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, words]);

  return (
    <div className="web-developer-animation">
      <span className="animated-text">{currentText}</span>
      <span className="caret">|</span>
    </div>
  );
};

// CarouselFun component
const CarouselFun = () => {
  const items = [
    {
      src: "/assets/Carousel.png",
      altText: "Himel Sarker",
      caption: (
        <p className="webAnime">
          I'm a&nbsp;
          <WebDeveloperAnimation />
        </p>
      ),
    },
  ];

  // SocialLink component
  const SocialLink = ({ href, icon }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-style"
      >
        {icon}
      </a>
    );
  };

  const item = items[0];
  return (
    <div id="myCarousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={item.src} alt={item.altText} className="img-item" />
          <div className="carousel-caption">
            <h1 className="title one">{item.altText}</h1>
            <h3>{item.caption}</h3>
            <div className="social-links">
              <SocialLink
                href="https://www.linkedin.com/in/himel-sarker/"
                icon={<LinkedInIcon fontSize="large" />}
              />
              <SocialLink
                href="https://github.com/himel-sarker"
                icon={<GitHubIcon fontSize="large" />}
              />
              <SocialLink
                href="https://instagram.com/himel_sarker1"
                icon={<InstagramIcon fontSize="large" />}
              />
            </div>
            <br />
            <button
              className="download-button"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1qiiy8xSYDcCFSwIS0i14gPpS9ZD2lAtk/view",
                  "_blank"
                );
              }}
            >
              Download CV
            </button>
            <button
              className="hire-button"
              onClick={() => {
                window.location.href = "mailto:himelsarker.softdev@gmail.com";
              }}
            >
              Hire me
            </button>
          </div>
        </div>
        {/* Add more carousel items as needed */}
      </div>
    </div>
  );
};

export default CarouselFun;