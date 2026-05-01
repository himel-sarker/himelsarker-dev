import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import {
  FaHome,
  FaInfo,
  FaTools,
  FaProjectDiagram,
  FaBookOpen,
  FaEnvelope,
  FaTimes,
  FaBars,
  FaChevronRight,
} from "react-icons/fa";
import "./Header.css";
import { useDarkMode } from './DarkModeContext';
import DarkModeToggle from './DarkModeToggle';

function SecondTopBar() {
  // State management
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Hooks
  const location = useLocation();
  const { isDark } = useDarkMode();
  
  // Toggle functions
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  // Navigation items configuration
  const navItems = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: FaHome, 
      path: '/home', 
      section: 'home-section', 
      desc: 'Welcome Page',
      shortcut: 'H'
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: FaInfo, 
      path: '/about', 
      desc: 'Who we are',
      shortcut: 'A'
    },
    { 
      id: 'skills', 
      label: 'Skills', 
      icon: FaTools, 
      path: '/skills', 
      desc: 'My Expertise',
      shortcut: 'S'
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: FaProjectDiagram, 
      path: '/projects', 
      desc: 'Portfolio Works',
      shortcut: 'P'
    },
    { 
      id: 'blogs', 
      label: 'Blogs', 
      icon: FaBookOpen, 
      path: '/blogs', 
      desc: 'Latest Articles',
      shortcut: 'B'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: FaEnvelope, 
      path: '/contact', 
      desc: 'Get in Touch',
      shortcut: 'C'
    },
  ];
  
  // Utility functions
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };
  
  const handleSmoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      scroller.scrollTo(targetId, {
        duration: 700,
        delay: 0,
        smooth: "easeInOutCubic",
        offset: -headerHeight,
      });
    }
    setIsSidebarOpen(false);
  };
  
  // Effects
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger-btn')) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSidebarOpen]);
  
  // Update header height on resize
  useEffect(() => {
    const handleResize = () => {
      const headerElement = document.querySelector(".modern-header");
      setHeaderHeight(headerElement?.offsetHeight || 70);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);
  
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isSidebarOpen]);
  
  return (
    <>
      {/* Dark Mode Toggle - Fixed Position */}
      <DarkModeToggle />
      
      {/* Main Header */}
      <header className={`modern-header ${isDark ? 'dark-mode' : 'light-mode'} ${isSidebarOpen ? 'sidebar-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          {/* Brand */}
          <Link
            to="/home"
            className="brand"
            onClick={() => handleSmoothScroll("home-section")}
            aria-label="Himel Sarker - Go to homepage"
          >
            <div className="brand-logo">H</div>
            <span className="brand-text">Himel Sarker</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`desktop-nav-link ${isActiveRoute(item.path) ? 'active' : ''}`}
                onClick={item.section ? () => handleSmoothScroll(item.section) : undefined}
                title={item.desc}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Hamburger Menu Button */}
          <button
            className={`hamburger-btn ${isSidebarOpen ? 'active' : ''}`}
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isSidebarOpen}
            aria-controls="sidebar-navigation"
          >
            <div className="hamburger-icon">
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </div>
          </button>
        </div>
      </header>
      
      {/* Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <aside 
        id="sidebar-navigation"
        className={`sidebar ${isSidebarOpen ? 'open' : ''} ${isDark ? 'dark-mode' : 'light-mode'}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="sidebar-header">
          <h2 className="sidebar-title">Navigation</h2>
          <button 
            className="close-btn"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = isActiveRoute(item.path);
            
            return (
              <div key={item.id} className="nav-item" style={{animationDelay: `${index * 0.05}s`}}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={item.section ? () => handleSmoothScroll(item.section) : () => setIsSidebarOpen(false)}
                  tabIndex={isSidebarOpen ? 0 : -1}
                >
                  <IconComponent className="nav-icon" />
                  <div className="nav-text">
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-desc">{item.desc}</span>
                  </div>
                  <div className="nav-meta">
                    <span className="nav-shortcut">{item.shortcut}</span>
                    <FaChevronRight className="nav-arrow" />
                  </div>
                </Link>
              </div>
            );
          })}
        </nav>
        
        <div className="sidebar-foo">
          <div className="foo-content">
            <p className="foo-text">© 2024 Himel Sarker</p>
            <p className="foo-subtext">Software Developer</p>
            <div className="foo-decoration"></div>
          </div>
        </div>
      </aside>
      
      {/* Custom Styles */}
      <style jsx>{`
        .modern-header.scrolled {
          background: ${isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(33, 37, 41, 0.98)'};
          box-shadow: 0 4px 20px ${isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.15)'};
        }
        
        .desktop-nav-link.active {
          color: #acc87a;
          background: rgba(0, 114, 30, 0.15);
          transform: translateY(-1px);
        }
        
        .nav-link.active {
          background: linear-gradient(135deg, rgba(0, 114, 30, 0.2), rgba(172, 200, 122, 0.1));
          color: ${isDark ? 'white' : '#1e293b'};
          transform: translateX(4px);
        }
        
        .nav-link.active .nav-icon,
        .nav-link.active .nav-desc {
          color: #acc87a;
        }
        
        .nav-meta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          margin-left: auto;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover .nav-meta {
          opacity: 1;
        }
        
        .nav-shortcut {
          font-size: 0.7rem;
          font-weight: 600;
          color: #00721e;
          background: rgba(0, 114, 30, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          min-width: 20px;
          text-align: center;
        }
        
        .nav-arrow {
          font-size: 0.8rem;
          color: #64748b;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover .nav-arrow {
          color: #acc87a;
          transform: translateX(3px);
        }
        
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }
        
        .sidebar-title {
          margin: 0;
          font-size: 1.25rem;
          color: ${isDark ? '#fff' : '#1e293b'};
        }
        
        .close-btn {
          background: transparent;
          border: none;
          color: ${isDark ? '#fff' : '#1e293b'};
          font-size: 1.25rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .close-btn:hover {
          background: ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }
        
        .foo-subtext {
          font-size: 0.8rem;
          color: #565f5aff;
          margin: 0.5rem 0;
          font-weight: 400;
        }
        
        /* Keyboard navigation focus styles */
        .hamburger-btn:focus-visible,
        .close-btn:focus-visible,
        .nav-link:focus-visible,
        .desktop-nav-link:focus-visible {
          outline: 2px solid #89917aff;
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}

export default SecondTopBar;