import React from "react";
import techimage from "/about/about.png";

const AboutHome = () => {
  return (
    <>
      <section className="home-service">
        <div className="container homepage">
          <div className="row">
            <div className="col-lg-6 box1 text-center">
              <div className="tech">
                <h1 className="mt-5">ABOUT US</h1>
                <p className="mt-3">
                  Veavix team consists of perfectionists and open-minded people.
                  We know how to make the best decisions and are able to put our
                  experience to work for you. Radical honesty is one of our key
                  values we practice whilst working with our clients.
                </p>
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

export default AboutHome;
