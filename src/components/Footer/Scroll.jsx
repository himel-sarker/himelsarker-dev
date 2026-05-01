import React, { useState, useRef, useEffect } from 'react';
import './Scroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

function Scroll({ children }) {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Show scrollbar on hover
  const handleMouseEnter = () => {
    setShowScrollbar(true);
    clearHideTimeout();
  };
  
  // Hide scrollbar after delay when mouse leaves
  const handleMouseLeave = () => {
    startHideTimeout();
  };
  
  // Show scrollbar on click and reset hide timer
  const handleClick = () => {
    setShowScrollbar(true);
    startHideTimeout();
  };
  
  const startHideTimeout = () => {
    clearHideTimeout();
    timeoutRef.current = setTimeout(() => {
      setShowScrollbar(false);
    }, 2000);
  };
  
  const clearHideTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => clearHideTimeout();
  }, []);
  
  return (
    <div
      ref={containerRef}
      className={`scroll-container ${showScrollbar ? 'show-scrollbar' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

// Scroll to top button component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  

  return (
  <button 
  className={`scroll-btn ${isVisible ? 'visible' : ''}`}
  onClick={scrollToTop}
  aria-label="Scroll to top"
>
  <FontAwesomeIcon icon={faAnglesUp} />
</button>
  );


}

export { Scroll, ScrollToTopButton };