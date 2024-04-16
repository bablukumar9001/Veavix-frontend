import React from "react";
import "./services/css/about.css";
import ContactForm from "./contact/ContactForm";
import AboutHome from "./about/AboutHome";
import AboutUs from "./about/AboutUs";
import Aboutveavix from "./about/Aboutveavix";
import WhyChooseUs from "./about/WhyChooseUs";
import Vision from "./about/Vision";
import Goal from "./about/Goal";

const About = () => {
  return (
    <>
      <AboutHome />
      <Aboutveavix />
      <WhyChooseUs />
      <Vision />
      {/* <AboutUs /> */}
      <Goal />
    </>
  );
};

export default About;
