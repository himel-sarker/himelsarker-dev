import React from "react";
import Topbar from "../Header/Topbar";
import "../Header/Topbar.css";

import Header from "../Header/Header";
import "../Header/Header.css";

import Footer from "../Footer/Footer";
import "../Footer/Footer.css";

import "./Layout.css"; // Import layout-specific styles

// import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Topbar />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
