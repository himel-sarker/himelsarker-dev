import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layouts/Layout";
import AboutUs from "./components/About/AboutUs";
import Blog from "./components/Blogs/Blog";
import Project from "./components/Projects/Project";
import Skill from "./components/Skills/Skill";
import ContactUs from "./components/Contact/ContactUs";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route or "404 Not Found" page */}
        <Route exact path="/*" element={<Layout><Home /></Layout>} />

        {/* Main routes */}
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/blogs" element={<Layout><Blog /></Layout>} />
        <Route path="/projects" element={<Layout><Project /></Layout>} />
        <Route path="/skills" element={<Layout><Skill /></Layout>} />
        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;