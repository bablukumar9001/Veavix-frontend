import React from "react";
import techimage from "/contact.png";

const ContactHome = () => {
  return (
    <>
      <section className="home-service">
        <div className="container homepage">
          <div className="row">
            <div className="col-lg-6 box1 text-center">
              <div className="tech">
                <div class="title">
                  <h1 className="h1">CONTACT US</h1>
                </div>
                <div className="mt-3 par ">
                  <p className="p">
                    We are on edge of our seats to hear you out and make it all
                    possible on your behalf.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 box2 ">
              <img className="techimage" src={techimage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHome;
