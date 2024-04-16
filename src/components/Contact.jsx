import React from "react";
// import "./css/contact.css";
import ContactForm from "./contact/ContactForm";
import ContactHome from "./contact/ContactHome";
import NewContactForm from "./contact/NewContactForm";
import Connect from "./contact/Connect";
// import ContactHome from "./contact/contactHome";
const Contact = () => {
  return (
    <>
      <section className="contact-wrapper">
        <ContactHome />
        {/* <ContactForm /> */}

        <Connect />
        <NewContactForm />
      </section>
    </>
  );
};

export default Contact;
