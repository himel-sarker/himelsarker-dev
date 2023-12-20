import React, { useState, useEffect } from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "bootstrap/dist/css/bootstrap.min.css";


// WebDeveloperAnimation component
const WebDeveloperAnimation = () => {
  const words = ["Front-end Developer", "ReactJs Developer"]; // Add more words as needed
  const [animatedText, setAnimatedText] = useState('');
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * words.length);
      const targetWord = words[randomIndex];
      let index = 0;

      const addAnimation = setInterval(() => {
        setAnimatedText((prevText) => {
          const currentText = targetWord.slice(0, index);
          index += 1;
          return currentText;
        });

        if (index > targetWord.length) {
          clearInterval(addAnimation);

          setTimeout(() => {
            if (isIncreasing) {
              stopAndResetAnimation(targetWord);
            } else {
              startDecreasingAnimation(targetWord);
            }
          }, 1000); // Adjust the duration as needed
        }
      }, 50); // Adjust the duration as needed for smoother transition
    }, 3000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [words, isIncreasing]);

  const stopAndResetAnimation = (targetWord) => {
    setAnimatedText(targetWord);
    setIsIncreasing(false);
    setTimeout(() => {
      resetAnimation(targetWord);
    }, 500); // 2-second stop, adjust the duration as needed
  };

  const startDecreasingAnimation = (targetWord) => {
    setIsIncreasing(true);
    let index = targetWord.length;

    const decreaseInterval = setInterval(() => {
      setAnimatedText((prevText) => {
        const currentText = targetWord.slice(0, index);
        index -= 1;
        return currentText;
      });

      if (index < 0) {
        clearInterval(decreaseInterval);
      }
    }, 50); // Adjust the duration as needed for smoother transition
  };

  const resetAnimation = (targetWord) => {
    let index = targetWord.length;

    const resetInterval = setInterval(() => {
      setAnimatedText((prevText) => {
        const currentText = targetWord.slice(0, index);
        index -= 1;
        return currentText;
      });

      if (index < 0) {
        clearInterval(resetInterval);
      }
    }, 50); // Adjust the duration as needed for smoother transition
  };

  return (
    <div className="WebDeveloperAnimation">
      {animatedText}
      <span className="blinking-caret">|</span>
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
        <p className='webAnime'>
          I'm a&nbsp;
          <WebDeveloperAnimation />
        </p>
      ),
      
    },
    // Add more items if needed
  ];

  // SocialLink component
  const SocialLink = ({ href, icon }) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="icon-style">
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
              <SocialLink href="https://www.linkedin.com/in/himel-sarker-7738b9180/" icon={<LinkedInIcon fontSize="large" />} />
              <SocialLink href="https://github.com/Himel-Sarker1" icon={<GitHubIcon fontSize="large" />} />
              <SocialLink href="https://instagram.com/himel_sarker1" icon={<InstagramIcon fontSize="large" />} />
            </div>
            <br />
            <button className="download-button" onClick={() => (window.location.href = "https://drive.google.com/file/d/1C2oBG6MGsl6WWAzbOAY9daaL_txSju5c/view")}>
              Download CV
            </button>
            <button className="hire-button" onClick={() => (window.location.href = "mailto:himelsarker85@gmail.com")}>
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
