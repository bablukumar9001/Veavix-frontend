import React from "react";
import image1 from "/image1.jpg";
import image2 from "/image2.webp";
// import image3 from "/image3.jpg";
import "../services/css/ServiceIndex.css";
import techimage from "/service.png";

const ServiceIndex = () => {
  return (
    <>
      <section className="home-service">
        <div className="container  homepage">
          <div className="row">
            <div className="col-lg-6 box1 text-center">
              <div className="tech">
                <div class="title">
                  <h1 className="h1">SERVICES</h1>
                </div>
                <div className="par mt-3">
                  <p className="p">
                    Get your business growing right and fast with our dedicated
                    services that include tailored services and applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 box2 ">
              <img className="techimage " src={techimage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceIndex;
