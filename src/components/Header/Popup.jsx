import React, { useState, useEffect } from 'react';
import App from "../../App.jsx"; // Import your actual App component
// Remove the demo App component since you're importing the real one
const Popup = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [countdown, setCountdown] = useState(3);
  const [showPopup, setShowPopup] = useState(true);
  
  // Format time as 12:12
  const formatTime = (date) => {
    const timeString = date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
    return timeString;
  };
  
  // Update current time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  
  // Countdown and animation logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // After countdown, start slide animation and then hide popup
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 2000); // 2 seconds after countdown ends
      return () => clearTimeout(hideTimer);
    }
  }, [countdown]);
  
  if (!showPopup) {
    return <App />;
  }
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #059669, #22c55e, #84cc16, #86efac, #34d399, #14b8a6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      {/* Centered content */}
      <div 
        style={{
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Poppins, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}
      >
        {/* Big designed "Thanks for visiting!" message */}
        <h2 
          style={{
            fontSize: '3rem',
            fontWeight: '300',
            marginBottom: '0.5rem',
            letterSpacing: '0.05em',
            animation: 'pulse 2s infinite'
          }}
        >
          <span style={{ fontFamily: 'Dancing Script, cursive' }}>T</span>
          <span style={{ fontFamily: 'Kalam, cursive' }}>h</span>
          <span style={{ fontFamily: 'Caveat, cursive' }}>a</span>
          <span style={{ fontFamily: 'Great Vibes, cursive' }}>n</span>
          <span style={{ fontFamily: 'Satisfy, cursive' }}>k</span>
          <span style={{ fontFamily: 'Dancing Script, cursive' }}>s</span>
          <span style={{ fontFamily: 'Kalam, cursive' }}> </span>
          <span style={{ fontFamily: 'Caveat, cursive' }}>f</span>
          <span style={{ fontFamily: 'Great Vibes, cursive' }}>o</span>
          <span style={{ fontFamily: 'Satisfy, cursive' }}>r</span>
          <span style={{ fontFamily: 'Dancing Script, cursive' }}> </span>
          <span style={{ fontFamily: 'Kalam, cursive' }}>v</span>
          <span style={{ fontFamily: 'Caveat, cursive' }}>i</span>
          <span style={{ fontFamily: 'Great Vibes, cursive' }}>s</span>
          <span style={{ fontFamily: 'Satisfy, cursive' }}>i</span>
          <span style={{ fontFamily: 'Dancing Script, cursive' }}>t</span>
          <span style={{ fontFamily: 'Kalam, cursive' }}>i</span>
          <span style={{ fontFamily: 'Caveat, cursive' }}>n</span>
          <span style={{ fontFamily: 'Great Vibes, cursive' }}>g</span>
          <span style={{ fontFamily: 'Satisfy, cursive' }}>!</span>
        </h2>
        
        {/* Current Time - simple format */}
        <div 
          style={{
            fontSize: '3.5rem',
            fontWeight: '300',
            marginBottom: '1.5rem',
            letterSpacing: '0.1em'
          }}
        >
          {formatTime(currentTime)}
        </div>
        
        {/* Loading Message */}
        <div 
          style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            fontWeight: '300',
            letterSpacing: '0.05em',
            fontFamily: 'Dancing Script, cursive'
          }}
        >
          Page is loading...
        </div>
        
        {/* Countdown */}
        <div 
          style={{
            fontSize: '4rem',
            fontWeight: '100',
            marginTop: '1rem',
            animation: countdown > 0 ? 'bounce 1s infinite' : 'none'
          }}
        >
          {countdown > 0 ? countdown : '✓'}
        </div>
      </div>
      {/* Top sliding panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          height: countdown === 0 ? '50vh' : '0',
          transition: 'height 1s ease-in-out',
          zIndex: 10000
        }}
      />
      {/* Bottom sliding panel */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          height: countdown === 0 ? '50vh' : '0',
          transition: 'height 1s ease-in-out',
          zIndex: 10000
        }}
      />
      {/* CSS Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-10px); }
          70% { transform: translateY(-5px); }
        }
        
        body, html, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};
export default Popup;