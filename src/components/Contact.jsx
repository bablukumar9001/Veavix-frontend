import React from "react";
// import "./css/contact.css";
import ContactForm from "./contact/ContactForm";
import ContactHome from "./contact/ContactHome";
// import ContactHome from "./contact/contactHome";
const Contact = () => {
  return (
    <>
      <section className="contact-wrapper">
        <ContactHome />
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
