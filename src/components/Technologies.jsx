import React from "react";
// import Navbar from "./Navbar";
import Homepage from "./technologies/Homepage";
import Mobile from "./technologies/Mobile";
import Frontend from "./technologies/Frontend";
import Backend from "./technologies/Backend";
import Databases from "./technologies/Databases";
import ContactForm from "./contact/ContactForm";
import Development from "./technologies/Development";
import NewContactForm from "./contact/NewContactForm";
// import Footer from "./Footer";

const Technologies = () => {
  return (
    <>
      <Homepage />
      <Mobile />
      <Frontend />
      <Backend />
      <Databases />
      <Development />

      {/* <ContactForm /> */}
      <NewContactForm />
    </>
  );
};

export default Technologies;
