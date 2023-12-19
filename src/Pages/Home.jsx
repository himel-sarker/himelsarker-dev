import React from "react";

import CarouselFun from "../components/Carousel/CarouselFun";
import "../components/Carousel/CarouselFun.css";

import AboutUs from "../components/About/AboutUs";
import "../components/About/AboutUs.css";

import Skills from "../components/Skills/Skill";
import "../components/Skills/Skill.css";

import Projects from "../components/Projects/Project";
import "../components/Projects/Project.css";

import Blogs from "../components/Blogs/Blog";
import "../components/Blogs/Blog.css";

import ContactUs from "../components/Contact/ContactUs";
import "../components/Contact/ContactUs.css";

import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  return (
    <div>
      <CarouselFun />
      <AboutUs />
      <Skills />
      <Projects />
      <Blogs />
      <ContactUs />
    </div>
  );
};

export default Home;

