import React from "react";
import ServiceIndex from "./services/ServiceIndex";
import Allservices from "./services/Allservices";
import Wework from "./services/Wework";
import HowWork from "./services/HowWork";
import ContactForm from "./contact/ContactForm";

const Services = () => {
  return (
    <>
      <section id="services">
        <ServiceIndex />
        <Allservices />
        <Wework />
        <HowWork />
        <ContactForm />
      </section>
    </>
  );
};

export default Services;
