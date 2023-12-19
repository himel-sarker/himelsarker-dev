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
            <button className="download-button" onClick={() => (window.location.href = "https://doc-04-7g-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/0p6cc8rqb9gidhre465876s7r0ip38rd/26ofs0t5sig5j9te9ervtvi0g8vidki3/1703026125000/3/114694339589317451324/APznzaaw0gsix3eLl6dIm0T47j400CNbuv8hhits3y4YXxs0xT7Hf9Uq66Msl4N4FHUJZhaZu4DkLO0adxEHOCKec3zHea7ooTAow3ofpwV1DhM-2dchrQijW1ksmR1ZI-6miziDK6OXZc6IHFKrREHW_dWPNk_JYNp76BiOk1ADrOjtjbvsDOdZynU9J6V_FRD2SHmhPVJ-5fsjZD8XaBVHRTKnp1sWJaGTyjuyXP9yVjmUJcHeOxyx8YZyg_ZOsvhOBXZ-f03KHcbRVkhX8cmrNNotTsRuNJrouYeIAaxC1yeF4mXXvP-SCBMeBMROZolISsoKC0hleL4uVvrWB0EmIIyRxpCgDnsugujmfzCfqnDYPDbt18XACf6T33aOdK6ZXYosSx319x8NWwWeteH8qFI4exKWNKje2lfVp-nPXXhS-ddsi5g=?authuser=1&nonce=2i2r2udtv1lhs&user=114694339589317451324&hash=9c5h0uiocb26m8934uqehhniilqlb20t")}>
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
