import React from "react";
import Topbar from "../Header/Topbar";
import "../Header/Topbar.css";

import Header from "../Header/Header";
import "../Header/Header.css";

import Footer from "../Footer/Footer";
import "../Footer/Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";


const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

